import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Smartphone, 
  DollarSign, 
  Target,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart,
  MapPin,
  Wifi,
  GraduationCap,
  Building,
  Zap,
  ArrowRight,
  Star,
  Award,
  Shield,
  Rocket
} from 'lucide-react';

const MarketStudy = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const marketData = {
    overview: {
      title: "Vue d'ensemble du marché tech africain",
      stats: [
        { label: "Population", value: "1.4 milliard", icon: Users, color: "blue" },
        { label: "Utilisateurs Internet", value: "540 millions", icon: Globe, color: "green" },
        { label: "Pénétration mobile", value: "88%", icon: Smartphone, color: "purple" },
        { label: "Marché EdTech", value: "$1.2 milliard", icon: DollarSign, color: "orange" }
      ]
    },
    opportunities: {
      title: "Opportunités de marché",
      segments: [
        {
          title: "Formation Tech",
          size: "$400M",
          growth: "+35%/an",
          description: "Demande croissante de compétences numériques",
          potential: "Très élevé"
        },
        {
          title: "Services IT",
          size: "$2.1B",
          growth: "+28%/an", 
          description: "Digitalisation des entreprises africaines",
          potential: "Élevé"
        },
        {
          title: "Freelancing",
          size: "$180M",
          growth: "+42%/an",
          description: "Économie gig en pleine expansion",
          potential: "Très élevé"
        }
      ]
    },
    challenges: {
      title: "Défis du marché",
      items: [
        {
          challenge: "Accès à Internet",
          impact: "Élevé",
          description: "40% de la population n'a pas accès à Internet",
          solution: "Contenu offline, partenariats télécoms"
        },
        {
          challenge: "Moyens de paiement",
          impact: "Moyen",
          description: "Faible adoption des cartes bancaires",
          solution: "Mobile money, crypto, paiement échelonné"
        },
        {
          challenge: "Qualité de formation",
          impact: "Élevé",
          description: "Manque de formations pratiques et certifiantes",
          solution: "Projets réels, mentoring, certifications reconnues"
        }
      ]
    },
    competition: {
      title: "Analyse concurrentielle",
      competitors: [
        {
          name: "Andela",
          focus: "Formation développeurs",
          strength: "Réseau international",
          weakness: "Sélectivité élevée",
          marketShare: "15%"
        },
        {
          name: "Coursera/Udemy",
          focus: "Cours en ligne",
          strength: "Contenu varié",
          weakness: "Peu adapté au contexte africain",
          marketShare: "25%"
        },
        {
          name: "Écoles locales",
          focus: "Formation traditionnelle",
          strength: "Présence physique",
          weakness: "Programmes obsolètes",
          marketShare: "45%"
        }
      ]
    }
  };

  const smartHubPositioning = {
    differentiators: [
      {
        title: "Approche Holistique",
        description: "Formation + Services + Communauté dans un seul écosystème",
        icon: Target
      },
      {
        title: "Contexte Africain",
        description: "Contenu adapté aux réalités et opportunités locales",
        icon: MapPin
      },
      {
        title: "Accessibilité",
        description: "Formations gratuites + options premium abordables",
        icon: Users
      },
      {
        title: "Pratique",
        description: "Projets réels, mentoring 1:1, accompagnement emploi",
        icon: Rocket
      }
    ],
    targetMarkets: [
      {
        country: "Cameroun",
        population: "27M",
        internetPenetration: "34%",
        opportunity: "Marché domestique, hub Afrique Centrale",
        priority: "Primaire"
      },
      {
        country: "Nigeria",
        population: "220M", 
        internetPenetration: "51%",
        opportunity: "Plus grand marché tech africain",
        priority: "Secondaire"
      },
      {
        country: "Kenya",
        population: "55M",
        internetPenetration: "43%",
        opportunity: "Hub fintech et innovation",
        priority: "Secondaire"
      },
      {
        country: "Sénégal",
        population: "17M",
        internetPenetration: "58%",
        opportunity: "Francophone, gouvernement pro-tech",
        priority: "Tertiaire"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Étude de Marché
            <span className="block text-green-600">Smart Digital Hub en Afrique</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyse approfondie du marché de la formation tech et des services numériques en Afrique
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3 },
            { id: 'opportunities', label: 'Opportunités', icon: TrendingUp },
            { id: 'challenges', label: 'Défis', icon: AlertTriangle },
            { id: 'competition', label: 'Concurrence', icon: Target },
            { id: 'positioning', label: 'Positionnement', icon: Star }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Market Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketData.overview.stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Key Insights */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Insights Clés du Marché</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Croissance Explosive</h4>
                      <p className="text-gray-600">Le marché EdTech africain croît de 35% par an, porté par la jeunesse de la population (60% ont moins de 25 ans).</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Mobile First</h4>
                      <p className="text-gray-600">88% de pénétration mobile vs 34% pour Internet fixe. Les solutions doivent être mobile-first.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Transformation Digitale</h4>
                      <p className="text-gray-600">Les entreprises africaines investissent massivement dans la digitalisation, créant une demande pour les compétences tech.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Gap de Compétences</h4>
                      <p className="text-gray-600">85% des entreprises peinent à recruter des développeurs qualifiés. Opportunité énorme pour la formation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'opportunities' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {marketData.opportunities.segments.map((segment, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{segment.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      segment.potential === 'Très élevé' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {segment.potential}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taille du marché:</span>
                      <span className="font-semibold text-gray-900">{segment.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Croissance:</span>
                      <span className="font-semibold text-green-600">{segment.growth}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{segment.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Market Trends */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tendances du Marché</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    trend: "Remote Work",
                    impact: "+300%",
                    description: "Explosion du travail à distance post-COVID"
                  },
                  {
                    trend: "Fintech",
                    impact: "+250%",
                    description: "Adoption massive des services financiers numériques"
                  },
                  {
                    trend: "E-commerce",
                    impact: "+180%",
                    description: "Croissance du commerce en ligne"
                  },
                  {
                    trend: "Blockchain",
                    impact: "+400%",
                    description: "Intérêt croissant pour les cryptomonnaies"
                  },
                  {
                    trend: "IA/ML",
                    impact: "+220%",
                    description: "Demande pour l'intelligence artificielle"
                  },
                  {
                    trend: "Cybersécurité",
                    impact: "+190%",
                    description: "Besoin urgent de sécurisation"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{item.trend}</h4>
                      <span className="text-green-600 font-bold">{item.impact}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="space-y-8">
            {marketData.challenges.items.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    item.impact === 'Élevé' ? 'bg-red-100' : 'bg-yellow-100'
                  }`}>
                    <AlertTriangle className={`w-6 h-6 ${
                      item.impact === 'Élevé' ? 'text-red-600' : 'text-yellow-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{item.challenge}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.impact === 'Élevé' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        Impact {item.impact}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Solution Smart Digital Hub:</h4>
                      <p className="text-green-700">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'competition' && (
          <div className="space-y-8">
            <div className="grid gap-6">
              {marketData.competition.competitors.map((competitor, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{competitor.name}</h3>
                    <div className="flex items-center space-x-2">
                      <PieChart className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">{competitor.marketShare} du marché</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
                      <p className="text-gray-600">{competitor.focus}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Forces</h4>
                      <p className="text-gray-600">{competitor.strength}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Faiblesses</h4>
                      <p className="text-gray-600">{competitor.weakness}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Competitive Advantage */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Avantage Concurrentiel de Smart Digital Hub</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Écosystème complet (Formation + Services + Communauté)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Contenu adapté au contexte africain</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Modèle freemium accessible</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Accompagnement personnalisé</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Focus sur l'employabilité</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">Communauté active et engagée</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'positioning' && (
          <div className="space-y-12">
            {/* Differentiators */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Différenciateurs Clés</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {smartHubPositioning.differentiators.map((diff, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <diff.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{diff.title}</h4>
                    <p className="text-gray-600">{diff.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Markets */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Marchés Cibles</h3>
              <div className="grid gap-6">
                {smartHubPositioning.targetMarkets.map((market, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{market.country}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        market.priority === 'Primaire' ? 'bg-green-100 text-green-800' :
                        market.priority === 'Secondaire' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {market.priority}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{market.population}</div>
                        <div className="text-sm text-gray-600">Population</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{market.internetPenetration}</div>
                        <div className="text-sm text-gray-600">Pénétration Internet</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {market.priority === 'Primaire' ? '🎯' : market.priority === 'Secondaire' ? '📈' : '🔍'}
                        </div>
                        <div className="text-sm text-gray-600">Priorité</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600">{market.opportunity}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Go-to-Market Strategy */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Stratégie Go-to-Market</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-3">Phase 1: Lancement Local</h4>
                  <p className="text-white/90">Cameroun comme marché test, validation du modèle</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-3">Phase 2: Expansion Régionale</h4>
                  <p className="text-white/90">Nigeria, Kenya - marchés à fort potentiel</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-3">Phase 3: Panafricain</h4>
                  <p className="text-white/90">Couverture continentale, partenariats stratégiques</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Smart Digital Hub : La Solution Adaptée au Marché Africain
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Avec un marché de 1.4 milliard de personnes, une croissance de 35%/an et un gap de compétences énorme, 
            Smart Digital Hub est parfaitement positionné pour devenir le leader de la formation tech en Afrique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>Lancer Smart Digital Hub</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-medium hover:border-green-600 hover:text-green-600 transition-all duration-200">
              Télécharger l'étude complète
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketStudy;