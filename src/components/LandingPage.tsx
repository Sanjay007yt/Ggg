import React from 'react';
import { Users, Heart, Eye, MessageCircle, AlertTriangle, Clock, Zap, Shield, Star, CheckCircle } from 'lucide-react';

const LandingPage: React.FC = () => {
  const services = [
    {
      id: 'followers',
      title: '🔥 Followers Plan',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-pink-500 to-rose-500',
      specs: [
        { label: 'Speed', value: '10K–20K/D', icon: <Zap className="w-4 h-4" /> },
        { label: 'Refill', value: '365 DAYS', icon: <Shield className="w-4 h-4" /> },
        { label: 'Drop', value: 'NON DROP*', icon: <CheckCircle className="w-4 h-4" /> }
      ],
      notes: [
        '100% NON DROP for new profiles',
        'Don\'t order for big profiles',
        'Refill works only via REFILL button',
        'Full refill for drops if the full count is from us'
      ],
      quality: [
        'MIX ACCOUNTS',
        'LOOKS LIKE REAL ACCOUNTS',
        'GLOBAL MIX',
        'SUPER FAST',
        '365 DAYS GUARANTEE'
      ]
    },
    {
      id: 'likes',
      title: '🔥 Likes Plan',
      icon: <Heart className="w-8 h-8" />,
      gradient: 'from-red-500 to-pink-500',
      specs: [
        { label: 'Start', value: 'INSTANT', icon: <Zap className="w-4 h-4" /> },
        { label: 'Speed', value: '20K–80K/D', icon: <Zap className="w-4 h-4" /> },
        { label: 'Quality', value: 'REAL + HQ', icon: <Star className="w-4 h-4" /> },
        { label: 'Average', value: '10 Mins', icon: <Clock className="w-4 h-4" /> }
      ],
      notes: [
        'Refill: NON DROP',
        'Bonus: Reach + Impressions',
        'Works on Posts, Reels, IGTV',
        'Accounts have DPs',
        'Lifetime Guarantee'
      ],
      quality: []
    },
    {
      id: 'views',
      title: '🔥 Views Plan',
      icon: <Eye className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      specs: [
        { label: 'Start', value: '0–1H', icon: <Clock className="w-4 h-4" /> },
        { label: 'Speed', value: '30K–50K/D', icon: <Zap className="w-4 h-4" /> },
        { label: 'Quality', value: 'REAL', icon: <Star className="w-4 h-4" /> },
        { label: 'Average', value: '2 Hours 5 Mins', icon: <Clock className="w-4 h-4" /> }
      ],
      notes: [
        'Refill: NON DROP',
        'Global Ad Views',
        'Real people will view reels',
        'Speed may fluctuate based on campaign'
      ],
      quality: []
    },
    {
      id: 'comments',
      title: '🔥 Comments Plan',
      icon: <MessageCircle className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500',
      specs: [
        { label: 'Start', value: '0–5H', icon: <Clock className="w-4 h-4" /> },
        { label: 'Speed', value: '50–300/D', icon: <Zap className="w-4 h-4" /> },
        { label: 'Quality', value: 'REAL + HQ', icon: <Star className="w-4 h-4" /> },
        { label: 'Average', value: '12 Hours 7 Mins', icon: <Clock className="w-4 h-4" /> }
      ],
      notes: [
        'Refill: NON DROP (30 Days)',
        'High-quality server',
        'May slow if under load',
        'Partial Support Available'
      ],
      quality: []
    },
    {
      id: 'report',
      title: '🔥 Report Plan',
      icon: <AlertTriangle className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500',
      specs: [
        { label: 'Start', value: '0–24H', icon: <Clock className="w-4 h-4" /> },
        { label: 'Speed', value: '1K/D', icon: <Zap className="w-4 h-4" /> },
        { label: 'Quality', value: 'REAL', icon: <Star className="w-4 h-4" /> },
        { label: 'Average', value: '12 Hours 27 Mins', icon: <Clock className="w-4 h-4" /> }
      ],
      notes: [
        'Refill: NOT AVAILABLE',
        'Unique IP users report the IG account',
        'No guarantee of suspension',
        'No refund or cancellation after order'
      ],
      quality: []
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            🚀 Instagram Growth Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Boost your Instagram presence with our premium, high-quality services. 
            Fast delivery, real engagement, and guaranteed results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-lg`}>
                  {service.icon}
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Specifications */}
              <div className="space-y-3 mb-6">
                {service.specs.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">{spec.icon}</span>
                      <span className="text-gray-300 font-medium">{spec.label}:</span>
                    </div>
                    <span className="text-white font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Notes */}
              {service.notes.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Features & Notes
                  </h4>
                  <ul className="space-y-2">
                    {service.notes.map((note, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quality Features */}
              {service.quality.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    Quality Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.quality.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-xs text-purple-200 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1`}>
                Get Started
              </button>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Grow Your Instagram?
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Join thousands of satisfied customers who have boosted their Instagram presence with our premium services.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 text-lg">
              Start Growing Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;