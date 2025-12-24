// src/pages/auth/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Home, User, Phone, MapPin, Building2, Users, Briefcase } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { supabase } from "../../lib/supabaseClient";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    userType: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
    address: "",
    state: "",
    city: "",
  });
  const [errors, setErrors] = useState({});

  const userTypes = [
    {
      value: "user",
      label: "Tenant",
      icon: <User size={32} />,
      description: "Looking for a property to rent",
      color: "from-blue-500 to-blue-600"
    },
    {
      value: "landlord",
      label: "Landlord",
      icon: <Building2 size={32} />,
      description: "Own properties and want to list them",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      value: "agent",
      label: "Agent",
      icon: <Briefcase size={32} />,
      description: "Individual real estate agent",
      color: "from-purple-500 to-purple-600"
    },
    {
      value: "agency",
      label: "Agency",
      icon: <Users size={32} />,
      description: "Real estate agency or company",
      color: "from-amber-500 to-amber-600"
    }
  ];

  const nigerianStates = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe",
    "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
    "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
    "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const selectUserType = (type) => {
    setFormData(prev => ({ ...prev, userType: type }));
    setErrors(prev => ({ ...prev, userType: "" }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.userType) {
      newErrors.userType = "Please select an account type";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Phone number must be 11 digits";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    
    if (!formData.state) {
      newErrors.state = "State is required";
    }
    
    if (!formData.city) {
      newErrors.city = "City is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep3()) return;
    
    setLoading(true);
    setErrors({});

    try {
      // 1. Sign up the user with Supabase Auth
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            user_type: formData.userType,
          }
        }
      });

      if (signUpError) throw signUpError;

      // 2. Update the user profile in the profiles table
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          full_name: formData.fullName,
          phone: formData.phone,
          address: formData.address,
          state: formData.state,
          city: formData.city,
          user_type: formData.userType,
          verification_status: 'unverified'
        })
        .eq('id', authData.user.id);

      if (profileError) throw profileError;

      // Success! Redirect to verification page or dashboard
      alert("Account created successfully! Please check your email to verify your account.");
      navigate("/login");
      
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({ 
        general: error.message || "Failed to create account. Please try again." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-primary py-10 pr-10"><Header /></div>

      <div className="flex-1 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4 py-12 pt-24">
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
        
        <div className="w-full max-w-2xl relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg mb-4">
              <Home className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
            <p className="text-gray-600">Join WeNest and find your perfect home</p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-md mx-auto">
              {[1, 2, 3].map((s) => (
                <React.Fragment key={s}>
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      step >= s 
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg' 
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {s}
                    </div>
                    <span className={`text-xs mt-2 ${step >= s ? 'text-emerald-600 font-medium' : 'text-gray-500'}`}>
                      {s === 1 ? 'Type' : s === 2 ? 'Details' : 'Location'}
                    </span>
                  </div>
                  {s < 3 && (
                    <div className={`flex-1 h-1 mx-2 rounded transition-all ${
                      step > s ? 'bg-gradient-to-r from-emerald-600 to-teal-600' : 'bg-gray-300'
                    }`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {errors.general && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{errors.general}</p>
              </div>
            )}

            {/* Step 1: User Type Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                  Select Account Type
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => selectUserType(type.value)}
                      disabled={loading}
                      className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                        formData.userType === type.value
                          ? 'border-emerald-500 bg-emerald-50 shadow-lg transform scale-105'
                          : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center text-white mb-4`}>
                        {type.icon}
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">{type.label}</h3>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </button>
                  ))}
                </div>
                {errors.userType && (
                  <p className="text-sm text-red-500 text-center">{errors.userType}</p>
                )}
                <button
                  onClick={handleNext}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Personal Details */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                  Personal Information
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full pl-11 pr-4 py-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all disabled:bg-gray-100`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full pl-11 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all disabled:bg-gray-100`}
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full pl-11 pr-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all disabled:bg-gray-100`}
                      placeholder="08012345678"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full pl-11 pr-12 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all disabled:bg-gray-100`}
                      placeholder="At least 8 characters"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={loading}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full pl-11 pr-12 py-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all disabled:bg-gray-100`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      disabled={loading}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleBack}
                    disabled={loading}
                    className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-all disabled:opacity-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:transform-none"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Location Details */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                  Location Information
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full pl-11 pr-4 py-3 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all appearance-none bg-white disabled:bg-gray-100`}
                    >
                      <option value="">Select your state</option>
                      {nigerianStates.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                  {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full pl-11 pr-4 py-3 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all disabled:bg-gray-100`}
                      placeholder="Enter your city"
                    />
                  </div>
                  {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address (Optional)
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      disabled={loading}
                      rows="3"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none disabled:bg-gray-100"
                      placeholder="Enter your full address"
                    ></textarea>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-sm text-emerald-800">
                    <strong>Almost there!</strong> By clicking "Create Account", you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleBack}
                    disabled={loading}
                    className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-all disabled:opacity-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:transform-none"
                  >
                    {loading ? "Creating Account..." : "Create Account"}
                  </button>
                </div>
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                  Sign in
                </a>
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <a href="/" className="text-sm text-gray-600 hover:text-gray-800 font-medium">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;