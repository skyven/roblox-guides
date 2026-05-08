// 多语言翻译数据
const translations = {
    zh: {
        // 导航栏
        nav: {
            home: '首页',
            guides: '游戏攻略',
            tips: '技巧教程',
            codes: '代码大全',
            news: '最新资讯'
        },
        // Hero区域
        hero: {
            title: 'Roblox攻略大全',
            subtitle: '掌握最新技巧，成为Roblox大师！',
            exploreBtn: '开始探索',
            tutorialBtn: '查看教程',
            stats: {
                mau: '月活跃玩家',
                games: '游戏数量',
                creative: '创意可能'
            }
        },
        // 攻略部分
        guides: {
            title: '热门游戏攻略',
            cards: [
                {
                    tag: '宠物养成',
                    title: 'Adopt Me! 完全攻略',
                    desc: '学会如何获取稀有宠物、快速赚钱、建造梦想家园',
                    date: '更新于 2026年5月',
                    views: '阅读量 12.5万'
                },
                {
                    tag: '角色扮演',
                    title: 'Brookhaven RP 攻略指南',
                    desc: '探索城市秘密、解锁隐藏地点、掌握社交技巧',
                    date: '更新于 2026年5月',
                    views: '阅读量 8.3万'
                },
                {
                    tag: '塔防策略',
                    title: 'Tower Defense Simulator 攻略',
                    desc: '最强塔组合推荐、金币快速获取、通关技巧',
                    date: '更新于 2026年5月',
                    views: '阅读量 15.2万'
                },
                {
                    tag: '恐怖解谜',
                    title: 'Piggy 全章节攻略',
                    desc: '所有地图通关技巧、隐藏结局、角色解锁',
                    date: '更新于 2026年5月',
                    views: '阅读量 9.7万'
                }
            ]
        },
        // 技巧教程
        tips: {
            title: '实用技巧教程',
            cards: [
                { icon: '💰', title: 'Robux赚钱攻略', desc: '5种最有效的Robux获取方法，从免费到投资' },
                { icon: '🎮', title: '游戏开发入门', desc: '从零开始学习Roblox Studio，创建你的第一个游戏' },
                { icon: '🛡️', title: '安全设置指南', desc: '保护账号安全，防止诈骗和恶意攻击' },
                { icon: '✨', title: '进阶脚本教程', desc: '掌握Lua编程，打造高级游戏功能' }
            ],
            readMore: '阅读更多 →'
        },
        // 代码部分
        codes: {
            title: '最新代码大全',
            categories: [
                {
                    title: '🎁 免费物品代码',
                    codes: [
                        { code: 'FREE_RBX2026', reward: '100 Robux' },
                        { code: 'SUMMER_SALE', reward: '夏日套装' },
                        { code: 'HAPPY_BIRTHDAY', reward: '生日帽子' }
                    ]
                },
                {
                    title: '🎮 游戏专属代码',
                    codes: [
                        { code: 'ADOPTME2026', reward: 'Adopt Me! 免费宠物' },
                        { code: 'TDS_GOLD', reward: 'Tower Defense 金币' },
                        { code: 'BROOKHAVEN_CASH', reward: 'Brookhaven 现金' }
                    ]
                },
                {
                    title: '⏰ 限时活动代码',
                    codes: [
                        { code: 'SPRING_EVENT', reward: '春季限定物品' },
                        { code: 'VIP_ACCESS', reward: 'VIP特权体验' }
                    ]
                }
            ]
        },
        // 新闻部分
        news: {
            title: '最新资讯',
            cards: [
                {
                    date: '2026年5月7日',
                    title: 'Roblox推出全新创作者激励计划',
                    desc: '新计划将为创作者提供更高的收益分成比例，支持更多创意内容'
                },
                {
                    date: '2026年5月5日',
                    title: '虚拟演唱会活动即将开启',
                    desc: '知名歌手将在Roblox举办首场虚拟演唱会，预计参与人数破纪录'
                },
                {
                    date: '2026年5月3日',
                    title: '移动端重大更新：性能优化与新功能',
                    desc: '新版App加载速度提升50%，新增社交功能和家长控制选项'
                }
            ]
        },
        // 页脚
        footer: {
            about: {
                title: '关于我们',
                desc: '致力于为Roblox玩家提供最全面的攻略和最新资讯'
            },
            quickLinks: {
                title: '快速链接'
            },
            contact: {
                title: '联系我们',
                email: '邮箱: contact@robloxguide.com',
                wechat: '微信: RobloxGuide2026'
            },
            copyright: '© 2026 Roblox攻略大全. 保留所有权利.'
        },
        // 语言切换器
        language: {
            switchLang: '切换语言'
        }
    },
    en: {
        // Navigation
        nav: {
            home: 'Home',
            guides: 'Guides',
            tips: 'Tips',
            codes: 'Codes',
            news: 'News'
        },
        // Hero
        hero: {
            title: 'Roblox Guide Hub',
            subtitle: 'Master the latest tips and become a Roblox pro!',
            exploreBtn: 'Explore Now',
            tutorialBtn: 'View Tutorials',
            stats: {
                mau: 'Monthly Active',
                games: 'Games',
                creative: 'Possibilities'
            }
        },
        // Guides
        guides: {
            title: 'Popular Game Guides',
            cards: [
                {
                    tag: 'Pet Sims',
                    title: 'Adopt Me! Complete Guide',
                    desc: 'Learn how to get rare pets, make money fast, and build your dream home',
                    date: 'Updated May 2026',
                    views: '125K views'
                },
                {
                    tag: 'Roleplay',
                    title: 'Brookhaven RP Guide',
                    desc: 'Explore city secrets, unlock hidden locations, master social skills',
                    date: 'Updated May 2026',
                    views: '83K views'
                },
                {
                    tag: 'Tower Defense',
                    title: 'Tower Defense Simulator Guide',
                    desc: 'Best tower combinations, fast gold farming, and winning strategies',
                    date: 'Updated May 2026',
                    views: '152K views'
                },
                {
                    tag: 'Horror',
                    title: 'Piggy Full Chapter Guide',
                    desc: 'All map walkthroughs, hidden endings, and character unlocks',
                    date: 'Updated May 2026',
                    views: '97K views'
                }
            ]
        },
        // Tips
        tips: {
            title: 'Useful Tutorials',
            cards: [
                { icon: '💰', title: 'Robux Money Guide', desc: '5 effective ways to get Robux, from free to invested' },
                { icon: '🎮', title: 'Game Development', desc: 'Learn Roblox Studio from scratch, create your first game' },
                { icon: '🛡️', title: 'Security Guide', desc: 'Protect your account, prevent scams and attacks' },
                { icon: '✨', title: 'Advanced Scripting', desc: 'Master Lua programming for advanced game features' }
            ],
            readMore: 'Read More →'
        },
        // Codes
        codes: {
            title: 'Latest Code Collection',
            categories: [
                {
                    title: '🎁 Free Item Codes',
                    codes: [
                        { code: 'FREE_RBX2026', reward: '100 Robux' },
                        { code: 'SUMMER_SALE', reward: 'Summer Bundle' },
                        { code: 'HAPPY_BIRTHDAY', reward: 'Birthday Hat' }
                    ]
                },
                {
                    title: '🎮 Game Specific Codes',
                    codes: [
                        { code: 'ADOPTME2026', reward: 'Adopt Me! Free Pet' },
                        { code: 'TDS_GOLD', reward: 'TDS Gold Coins' },
                        { code: 'BROOKHAVEN_CASH', reward: 'Brookhaven Cash' }
                    ]
                },
                {
                    title: '⏰ Limited Event Codes',
                    codes: [
                        { code: 'SPRING_EVENT', reward: 'Spring Exclusive' },
                        { code: 'VIP_ACCESS', reward: 'VIP Trial' }
                    ]
                }
            ]
        },
        // News
        news: {
            title: 'Latest News',
            cards: [
                {
                    date: 'May 7, 2026',
                    title: 'Roblox launches new creator incentive program',
                    desc: 'New program offers higher revenue share for creators and supports more creative content'
                },
                {
                    date: 'May 5, 2026',
                    title: 'Virtual concert event coming soon',
                    desc: 'Famous artists to host first virtual concert on Roblox, record attendance expected'
                },
                {
                    date: 'May 3, 2026',
                    title: 'Major mobile update: Performance & features',
                    desc: 'New app loads 50% faster with new social features and parental controls'
                }
            ]
        },
        // Footer
        footer: {
            about: {
                title: 'About Us',
                desc: 'Dedicated to providing comprehensive guides and latest news for Roblox players'
            },
            quickLinks: {
                title: 'Quick Links'
            },
            contact: {
                title: 'Contact Us',
                email: 'Email: contact@robloxguide.com',
                wechat: 'WeChat: RobloxGuide2026'
            },
            copyright: '© 2026 Roblox Guide Hub. All rights reserved.'
        },
        // Language Switcher
        language: {
            switchLang: 'Switch Language'
        }
    },
    es: {
        // Navegación
        nav: {
            home: 'Inicio',
            guides: 'Guías',
            tips: 'Consejos',
            codes: 'Códigos',
            news: 'Noticias'
        },
        // Hero
        hero: {
            title: 'Guía Completa Roblox',
            subtitle: '¡Domina los últimos trucos y conviértete en un pro de Roblox!',
            exploreBtn: 'Explorar Ahora',
            tutorialBtn: 'Ver Tutoriales',
            stats: {
                mau: 'Activos Mensuales',
                games: 'Juegos',
                creative: 'Posibilidades'
            }
        },
        // Guías
        guides: {
            title: 'Guías Populares',
            cards: [
                {
                    tag: 'Mascotas',
                    title: 'Adopt Me! Guía Completa',
                    desc: 'Aprende a obtener mascotas raras, ganar dinero rápido y construir tu casa soñada',
                    date: 'Actualizado mayo 2026',
                    views: '125K vistas'
                },
                {
                    tag: 'Rolplay',
                    title: 'Brookhaven RP Guía',
                    desc: 'Explora secretos de la ciudad, desbloquea ubicaciones ocultas, domina habilidades sociales',
                    date: 'Actualizado mayo 2026',
                    views: '83K vistas'
                },
                {
                    tag: 'Defensa de Torres',
                    title: 'Tower Defense Simulator Guía',
                    desc: 'Mejores combinaciones, farmear oro rápido y estrategias ganadoras',
                    date: 'Actualizado mayo 2026',
                    views: '152K vistas'
                },
                {
                    tag: 'Terror',
                    title: 'Piggy Guía Completa',
                    desc: 'Todas las rutas, finales ocultos y desbloqueo de personajes',
                    date: 'Actualizado mayo 2026',
                    views: '97K vistas'
                }
            ]
        },
        // Consejos
        tips: {
            title: 'Tutoriales Útiles',
            cards: [
                { icon: '💰', title: 'Guía de Robux', desc: '5 formas efectivas de obtener Robux, de gratuitas a inversión' },
                { icon: '🎮', title: 'Desarrollo Juegos', desc: 'Aprende Roblox Studio desde cero, crea tu primer juego' },
                { icon: '🛡️', title: 'Guía de Seguridad', desc: 'Protege tu cuenta, previene estafas y ataques' },
                { icon: '✨', title: 'Scripting Avanzado', desc: 'Domina Lua para funciones avanzadas de juego' }
            ],
            readMore: 'Leer Más →'
        },
        // Códigos
        codes: {
            title: 'Colección de Códigos',
            categories: [
                {
                    title: '🎁 Códigos Gratuitos',
                    codes: [
                        { code: 'FREE_RBX2026', reward: '100 Robux' },
                        { code: 'SUMMER_SALE', reward: 'Paquete Verano' },
                        { code: 'HAPPY_BIRTHDAY', reward: 'Sombrero Cumpleaños' }
                    ]
                },
                {
                    title: '🎮 Códigos Específicos',
                    codes: [
                        { code: 'ADOPTME2026', reward: 'Adopt Me! Mascota Gratis' },
                        { code: 'TDS_GOLD', reward: 'TDS Monedas Oro' },
                        { code: 'BROOKHAVEN_CASH', reward: 'Efectivo Brookhaven' }
                    ]
                },
                {
                    title: '⏰ Códigos Evento',
                    codes: [
                        { code: 'SPRING_EVENT', reward: 'Exclusivo Primavera' },
                        { code: 'VIP_ACCESS', reward: 'Prueba VIP' }
                    ]
                }
            ]
        },
        // Noticias
        news: {
            title: 'Últimas Noticias',
            cards: [
                {
                    date: '7 mayo 2026',
                    title: 'Roblox lanza nuevo programa de incentivos',
                    desc: 'Nuevo programa ofrece mayor porcentaje de ingresos para creadores y más contenido'
                },
                {
                    date: '5 mayo 2026',
                    title: 'Evento concierto virtual próximamente',
                    desc: 'Artistas famosos celebran primer concierto virtual en Roblox, audiencia récord esperada'
                },
                {
                    date: '3 mayo 2026',
                    title: 'Gran actualización móvil: Rendimiento y funciones',
                    desc: 'Nueva app carga 50% más rápido con nuevas funciones sociales y controles parentales'
                }
            ]
        },
        // Pie de página
        footer: {
            about: {
                title: 'Sobre Nosotros',
                desc: 'Dedicados a proporcionar guías completas y últimas noticias para jugadores de Roblox'
            },
            quickLinks: {
                title: 'Enlaces Rápidos'
            },
            contact: {
                title: 'Contáctanos',
                email: 'Email: contact@robloxguide.com',
                wechat: 'WeChat: RobloxGuide2026'
            },
            copyright: '© 2026 Guía Roblox. Todos los derechos reservados.'
        },
        // Selector de idioma
        language: {
            switchLang: 'Cambiar Idioma'
        }
    }
};
