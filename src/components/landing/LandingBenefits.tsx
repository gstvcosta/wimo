

import { 
    BarChart3, 
    Target, 
    PiggyBank, 
    Shield, 
    Smartphone,
    FileText
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useBrandingConfig } from '@/hooks/useBrandingConfig';

const LandingBenefits = () => {
    const { companyName } = useBrandingConfig();
    const resolvedName = (companyName && companyName.trim().length > 0) ? companyName : (import.meta.env.VITE_COMPANY_NAME || 'Poupe Já');
    
    const features = [
        {
            icon: PiggyBank,
            title: "Controle de Gastos",
            description: "Saiba exatamente onde cada centavo é gasto. Categorização automática que revela seus padrões de consumo.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: BarChart3,
            title: "Dashboard Inteligente",
            description: "Veja sua situação financeira em segundos. Gráficos claros que mostram entrada, saída e saldo atual.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: Target,
            title: "Metas Financeiras",
            description: "Alcance seus objetivos financeiros mais rápido. Defina metas e acompanhe seu progresso automaticamente.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: FileText,
            title: "Relatórios Inteligentes",
            description: "Relatórios que ajudam você a decidir. Análises detalhadas para cortar gastos e aumentar economia.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: Smartphone,
            title: "Acesso Total",
            description: "Suas finanças sempre à mão. Use no celular, computador ou tablet com sincronização automática.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: Shield,
            title: "Segurança Garantida",
            description: "Durma tranquilo sabendo que seus dados estão protegidos com criptografia militar e backup seguro.",
            color: "from-primary via-accent to-secondary"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section id="recursos" className="py-24 bg-muted/20 dark:bg-muted/20 w-full">
            <div className="w-full px-4">
                {/* Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Recursos que transformam suas finanças
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Descubra como o <span className="dv-brand-text">{resolvedName}</span> pode revolucionar sua relação com o dinheiro 
                        e te ajudar a alcançar a liberdade financeira.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            className="group relative"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <div className="bg-card dark:bg-card rounded-2xl p-6 shadow-lg border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 h-full" style={{boxShadow: '0 4px 20px rgba(99, 102, 241, 0.15)'}}>
                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <feature.icon className="h-7 w-7 text-white" />
                                </div>
                                
                                {/* Content */}
                                <h3 className="text-lg font-semibold text-foreground mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LandingBenefits;
