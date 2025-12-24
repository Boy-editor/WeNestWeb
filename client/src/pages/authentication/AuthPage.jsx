import React, { useState } from 'react';
import { Mail, Lock, User, Phone, MapPin, Building2, Briefcase, Home, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState('user');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: '',
    confirmPassword: ''
  });

  const userTypes = [
    {
      id: 'user',
      label: 'Tenant',
      icon: <User size={24} />,
      description: 'Looking for a property to rent',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'landlord',
      label: 'Landlord',
      icon: <Home size={24} />,
      description: 'I own properties to rent',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'agent',
      label: 'Agent',
      icon: <Briefcase size={24} />,
      description: 'Individual real estate agent',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'agency',
      label: 'Agency',
      icon: <Building2 size={24} />,
      description: 'Real estate agency/company',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', { ...formData, userType: selectedUserType });
    // Here you would integrate with your Supabase authentication
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Branding */}
          <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-amber-300 rounded-full blur-xl"></div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-4">Welcome to WeNest</h1>
              <p className="text-xl text-gray-100 mb-8">
                Your trusted platform for finding and listing properties across Nigeria
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: <CheckCircle2 size={20} />, text: 'Verified Properties' },
                  { icon: <CheckCircle2 size={20} />, text: 'Secure Messaging' },
                  { icon: <CheckCircle2 size={20} />, text: 'Easy Booking' },
                  { icon: <CheckCircle2 size={20} />, text: 'Trusted Community' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-amber-300">{item.icon}</div>
                    <span className="text-gray-100">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-amber-300">10K+</div>
                    <div className="text-sm text-gray-200">Properties</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-300">5K+</div>
                    <div className="text-sm text-gray-200">Happy Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="p-8 md:p-12">
            <div className="max-w-md mx-auto">
              {/* Toggle Login/Signup */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 rounded-full p-1 flex">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`px-8 py-2 rounded-full font-medium transition-all duration-300 ${
                      isLogin
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`px-8 py-2 rounded-full font-medium transition-all duration-300 ${
                      !isLogin
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                {isLogin ? 'Welcome Back!' : 'Create Account'}
              </h2>
              <p className="text-gray-600 text-center mb-8">
                {isLogin
                  ? 'Enter your credentials to access your account'
                  : 'Join WeNest and start your property journey'}
              </p>

              {/* User Type Selection - Only for Signup */}
              {!isLogin && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    I am a...
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {userTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedUserType(type.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          selectedUserType === type.id
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center text-white mb-2`}>
                          {type.icon}
                        </div>
                        <div className="font-semibold text-gray-800 text-sm mb-1">
                          {type.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {type.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Full Name - Signup Only */}
                {!isLogin && (
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
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                )}

                {/* Email */}
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
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Phone - Signup Only */}
                {!isLogin && (
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
                        onChange={handleInputChange}
                        placeholder="+234 XXX XXX XXXX"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                )}

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password - Signup Only */}
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                )}

                {/* Forgot Password - Login Only */}
                {isLogin && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                {/* Terms - Signup Only */}
                {!isLogin && (
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 rounded-xl hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {isLogin ? 'Login' : 'Create Account'}
                </button>
              </div>

              {/* Social Login Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center space-x-2 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-gray-700 font-medium">Google</span>
                </button>
                <button className="flex items-center justify-center space-x-2 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-gray-700 font-medium">Facebook</span>
                </button>
              </div>

              {/* Footer Text */}
              <p className="text-center text-sm text-gray-600 mt-6">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  {isLogin ? 'Sign Up' : 'Login'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;