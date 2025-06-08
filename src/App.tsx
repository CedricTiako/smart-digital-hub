import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Users, 
  BookOpen, 
  Zap, 
  Globe, 
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Award,
  TrendingUp,
  MessageCircle,
  Calendar,
  Download,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Target,
  Lightbulb,
  Shield,
  Rocket,
  Heart,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Instagram,
  BarChart3
} from 'lucide-react';
import MarketStudy from './components/MarketStudy';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [showMarketStudy, setShowMarketStudy] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMenuOpen(false);
  };

  if (showMarketStudy) {
    return (
      <div>
        <button
          onClick={() => setShowMarketStudy(false)}
          className="fixed top-4 left-4 z-50 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
        </button>
        <MarketStudy />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Smart Digital Hub</span>
                <div className="text-xs text-green-600 font-medium">Formez • Connectez • Propulsez</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'formation', label: 'Formation' },
                { id: 'services', label: 'Services' },
                { id: 'communaute', label: 'Communauté' },
                { id: 'blog', label: 'Blog' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-green-600 ${
                    activeSection === item.id ? 'text-green-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setShowMarketStudy(true)}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm font-medium">Étude de Marché</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => scrollToSection('formation')}
                className="hidden sm:flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">Commencer</span>
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-3">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'formation', label: 'Formation' },
                { id: 'services', label: 'Services' },
                { id: 'communaute', label: 'Communauté' },
                { id: 'blog', label: 'Blog' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-green-600 py-2 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setShowMarketStudy(true)}
                className="block w-full text-left text-blue-600 hover:text-blue-700 py-2 transition-colors duration-200"
              >
                Étude de Marché
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Plateforme #1 pour les talents tech africains</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">Smart Digital</span>
                <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Hub
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                La plateforme qui <span className="font-semibold text-green-600">forme</span>, 
                <span className="font-semibold text-green-600"> connecte</span> et 
                <span className="font-semibold text-green-600"> propulse</span> les talents numériques africains
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection('formation')}
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-green-700 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Commencer ma formation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setShowMarketStudy(true)}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center space-x-2"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Voir l'étude de marché</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1.4B</div>
                <div className="text-sm text-gray-600">Population africaine</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">540M</div>
                <div className="text-sm text-gray-600">Utilisateurs Internet</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">35%</div>
                <div className="text-sm text-gray-600">Croissance EdTech/an</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">$1.2B</div>
                <div className="text-sm text-gray-600">Marché EdTech</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Formation Section */}
      <section id="formation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smart Academy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des formations pratiques et certifiantes pour maîtriser les technologies du futur
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Développement Full Stack",
                description: "Maîtrisez React, Node.js, et les bases de données pour créer des applications complètes",
                level: "Débutant à Avancé",
                duration: "12 semaines",
                price: "Gratuit",
                features: ["Projets pratiques", "Mentorat 1:1", "Certificat reconnu", "Accès à vie"],
                color: "blue",
                popular: true
              },
              {
                title: "DevOps & Cloud",
                description: "Apprenez Docker, Kubernetes, AWS et automatisez vos déploiements",
                level: "Intermédiaire",
                duration: "8 semaines",
                price: "49€",
                features: ["Labs pratiques", "Projets réels", "Support 24/7", "Job assistance"],
                color: "purple"
              },
              {
                title: "Cybersécurité",
                description: "Protégez les systèmes et données avec les meilleures pratiques de sécurité",
                level: "Avancé",
                duration: "10 semaines",
                price: "79€",
                features: ["Simulations réelles", "Outils pro", "Certification", "Réseau expert"],
                color: "red"
              },
              {
                title: "Business Freelance",
                description: "Lancez votre activité freelance et trouvez vos premiers clients",
                level: "Tous niveaux",
                duration: "6 semaines",
                price: "29€",
                features: ["Templates contrats", "Stratégies pricing", "Réseau clients", "Suivi perso"],
                color: "green"
              },
              {
                title: "Mobile Development",
                description: "Créez des apps iOS et Android avec React Native et Flutter",
                level: "Intermédiaire",
                duration: "10 semaines",
                price: "59€",
                features: ["Apps réelles", "Store deployment", "UI/UX design", "Performance"],
                color: "indigo"
              },
              {
                title: "Data Science & IA",
                description: "Analysez les données et créez des modèles d'intelligence artificielle",
                level: "Avancé",
                duration: "14 semaines",
                price: "89€",
                features: ["Python/R", "Machine Learning", "Projets IA", "Portfolio"],
                color: "orange"
              }
            ].map((course, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${course.popular ? 'ring-2 ring-green-500' : ''}`}>
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Plus populaire
                    </span>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-${course.color}-100 rounded-xl flex items-center justify-center`}>
                      <BookOpen className={`w-6 h-6 text-${course.color}-600`} />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Niveau:</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Durée:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${
                    course.popular 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'border border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600'
                  }`}>
                    {course.price === 'Gratuit' ? 'Commencer gratuitement' : 'S\'inscrire maintenant'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smart Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions numériques professionnelles pour propulser votre business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Création de Sites Web",
                description: "Sites vitrines, e-commerce et applications web sur mesure avec les dernières technologies",
                features: ["Design responsive", "SEO optimisé", "Performance maximale", "Maintenance incluse"],
                price: "À partir de 500€"
              },
              {
                icon: Code,
                title: "Applications Mobiles",
                description: "Apps iOS et Android natives ou cross-platform pour tous vos besoins business",
                features: ["UI/UX moderne", "Performance native", "Store deployment", "Support continu"],
                price: "À partir de 1200€"
              },
              {
                icon: Shield,
                title: "Maintenance & Sécurité",
                description: "Surveillance, mises à jour et sécurisation de vos systèmes informatiques",
                features: ["Monitoring 24/7", "Sauvegardes auto", "Mises à jour", "Support technique"],
                price: "À partir de 99€/mois"
              },
              {
                icon: Users,
                title: "Formation Sur Mesure",
                description: "Formations personnalisées pour vos équipes sur les technologies de votre choix",
                features: ["Contenu adapté", "Formateurs experts", "Suivi personnalisé", "Certification"],
                price: "Sur devis"
              },
              {
                icon: Rocket,
                title: "Consulting Tech",
                description: "Audit technique, architecture système et conseils stratégiques pour votre transformation digitale",
                features: ["Audit complet", "Roadmap tech", "Optimisation", "Accompagnement"],
                price: "À partir de 150€/jour"
              },
              {
                icon: TrendingUp,
                title: "Marketing Digital",
                description: "Stratégies SEO, réseaux sociaux et campagnes publicitaires pour booster votre visibilité",
                features: ["Stratégie SEO", "Social media", "Publicité en ligne", "Analytics"],
                price: "À partir de 300€/mois"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">{service.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium">
                    Demander un devis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communauté Section */}
      <section id="communaute" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smart Network</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rejoignez une communauté dynamique de développeurs africains passionnés
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: MessageCircle,
                    title: "Discussions & Entraide",
                    description: "Échangez avec des développeurs de tous niveaux, posez vos questions et partagez vos connaissances"
                  },
                  {
                    icon: Calendar,
                    title: "Événements Réguliers",
                    description: "Webinaires, workshops, hackathons et meetups pour apprendre et networker ensemble"
                  },
                  {
                    icon: Award,
                    title: "Challenges & Concours",
                    description: "Participez à des défis mensuels pour tester vos compétences et gagner des prix"
                  },
                  {
                    icon: Heart,
                    title: "Mentorat & Coaching",
                    description: "Bénéficiez de l'accompagnement de développeurs seniors et mentors expérimentés"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Rejoindre WhatsApp</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:border-green-600 hover:text-green-600 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Discord Community</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">2,500+</div>
                    <div className="text-sm text-gray-600">Membres actifs</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">150+</div>
                    <div className="text-sm text-gray-600">Messages/jour</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">25+</div>
                    <div className="text-sm text-gray-600">Événements/mois</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-600">Projets partagés</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smart Blog & News</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Restez à jour avec les dernières tendances tech et découvrez des histoires inspirantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Tutorial",
                title: "Comment créer une API REST avec Node.js en 2024",
                excerpt: "Guide complet pour développer une API moderne avec Express, MongoDB et les meilleures pratiques de sécurité.",
                author: "Cedric Tiako",
                date: "15 Jan 2024",
                readTime: "8 min",
                image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                category: "Success Story",
                title: "De zéro à développeur senior : Le parcours de Marie",
                excerpt: "Découvrez comment Marie est passée de débutante à lead developer en 18 mois grâce à Smart Digital Hub.",
                author: "Smart Team",
                date: "12 Jan 2024",
                readTime: "5 min",
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                category: "Tech News",
                title: "Les 10 frameworks JavaScript à maîtriser en 2024",
                excerpt: "Analyse des frameworks les plus demandés sur le marché africain et conseils pour choisir le bon.",
                author: "Tech Team",
                date: "10 Jan 2024",
                readTime: "12 min",
                image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                category: "Career",
                title: "Freelance vs Salarié : Quel choix pour un dev africain ?",
                excerpt: "Comparaison détaillée des avantages et inconvénients de chaque statut avec des témoignages réels.",
                author: "Career Team",
                date: "8 Jan 2024",
                readTime: "10 min",
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                category: "Tools",
                title: "Top 15 des outils gratuits pour développeurs en 2024",
                excerpt: "Sélection des meilleurs outils gratuits pour booster votre productivité et améliorer votre workflow.",
                author: "Tools Team",
                date: "5 Jan 2024",
                readTime: "15 min",
                image: "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                category: "Community",
                title: "Retour sur le Hackathon Smart Digital Hub 2024",
                excerpt: "Découvrez les projets gagnants et les innovations créées lors de notre premier hackathon panafricain.",
                author: "Event Team",
                date: "3 Jan 2024",
                readTime: "7 min",
                image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            ].map((article, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <button className="mt-4 text-green-600 hover:text-green-700 font-medium flex items-center space-x-1 transition-colors duration-200">
                    <span>Lire la suite</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2 mx-auto">
              <span>Voir tous les articles</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une question ? Un projet ? Notre équipe est là pour vous accompagner
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Parlons de votre projet</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Que vous souhaitiez vous former, développer un projet ou rejoindre notre communauté, 
                  nous sommes là pour vous aider à concrétiser vos ambitions dans le numérique.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "contact@smartdigitalhub.com",
                    link: "mailto:contact@smartdigitalhub.com"
                  },
                  {
                    icon: Phone,
                    label: "Téléphone",
                    value: "+237 677 334 686",
                    link: "tel:+237677334686"
                  },
                  {
                    icon: MapPin,
                    label: "Localisation",
                    value: "Douala, Cameroun",
                    link: "#"
                  }
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                      <contact.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{contact.label}</div>
                      <div className="text-gray-900 font-medium">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex items-center space-x-4 pt-6">
                {[
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Youtube, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-green-100 hover:text-green-600 transition-all duration-200"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200">
                    <option>Formation</option>
                    <option>Services</option>
                    <option>Partenariat</option>
                    <option>Support</option>
                    <option>Autre</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Décrivez votre projet ou votre question..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Smart Digital Hub</span>
                  <div className="text-xs text-green-400 font-medium">Formez • Connectez • Propulsez</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                La plateforme qui forme, connecte et propulse les talents numériques africains vers l'excellence.
              </p>
              <div className="flex items-center space-x-4">
                {[
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Youtube, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Formation</h3>
              <div className="space-y-2">
                {['Full Stack', 'DevOps & Cloud', 'Cybersécurité', 'Mobile Dev', 'Data Science', 'Business'].map((item) => (
                  <button
                    key={item}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <div className="space-y-2">
                {['Développement Web', 'Apps Mobiles', 'Consulting', 'Formation Pro', 'Maintenance', 'Marketing'].map((item) => (
                  <button
                    key={item}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Communauté</h3>
              <div className="space-y-2">
                {['WhatsApp', 'Discord', 'Événements', 'Blog', 'Newsletter', 'Support'].map((item) => (
                  <button
                    key={item}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Smart Digital Hub. Tous droits réservés. Fait avec ❤️ pour l'Afrique.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;