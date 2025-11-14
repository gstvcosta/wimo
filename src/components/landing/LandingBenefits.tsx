

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
import BrandText from '@/components/ui/BrandText';

const LandingBenefits = () => {
    const { companyName } = useBrandingConfig();
    const resolvedName = (companyName && companyName.trim().length > 0) ? companyName : (import.meta.env.VITE_COMPANY_NAME || 'Poupe Já');
    
    const features = [
        {
            icon: PiggyBank,
            title: "Gestão de Despesas",
            description: "Monitore cada real gasto com precisão. Sistema automático de categorização que identifica seus hábitos financeiros.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: BarChart3,
            title: "Visão Completa",
            description: "Entenda sua situação financeira instantaneamente. Gráficos intuitivos com entradas, saídas e saldo disponível.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: Target,
            title: "Objetivos Financeiros",
            description: "Conquiste suas metas com mais agilidade. Crie objetivos e monitore o progresso de forma automática.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: FileText,
            title: "Análises Detalhadas",
            description: "Relatórios que orientam suas decisões. Dados precisos para reduzir despesas e maximizar economias.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: Smartphone,
            title: "Disponível Sempre",
            description: "Seu dinheiro sob controle onde estiver. Acesse via celular, desktop ou tablet com sincronia em tempo real.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: Shield,
            title: "Proteção Total",
            description: "Tenha tranquilidade com segurança máxima. Seus dados protegidos com criptografia avançada e backups constantes.",
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
                        Funcionalidades que facilitam sua vida financeira
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Conheça as ferramentas que o <BrandText name={resolvedName} /> oferece para transformar 
                        sua gestão financeira e conquistar seus objetivos.
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
                    <div className="bg-card rounded-2xl p-6 shadow-lg border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 h-full" style={{boxShadow: '0 4px 20px rgba(99, 102, 241, 0.15)'}}>
                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <feature.icon className="h-7 w-7 text-primary" />
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
