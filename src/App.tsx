import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Zap,
  User,
  Settings,
  Plus,
  BarChart3,
  Wallet,
  Check,
  Wifi,
  Search,
  ArrowDownLeft,
  Bell,
  TrendingUp,
  Target
} from 'lucide-react';

const CleanToggle = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div 
      className={`w-12 h-7 rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOn ? 'bg-green-500' : 'bg-white/10'}`}
      onClick={() => setIsOn(!isOn)}
    >
      <motion.div 
        layout
        className="w-5 h-5 bg-white rounded-full shadow-sm"
        animate={{ x: isOn ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
  );
};

const IOSSegmentedControl = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Analytics', 'Activity'];

  return (
    <div className="relative flex p-1.5 w-full max-w-sm mx-auto rounded-full overflow-hidden">
      
      {/* Liquid Glass Container Background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[40px] saturate-150 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_10px_30px_rgba(0,0,0,0.2)]" />
      
      {/* Active Tab "Liquid" Pill */}
      <motion.div
        className="absolute top-1.5 bottom-1.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.2)] z-10"
        style={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          width: `calc(${100 / tabs.length}% - 12px)`,
        }}
        layoutId="activeTab"
        initial={false}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 30 
        }}
        animate={{
            left: `${tabs.indexOf(activeTab) * (100 / tabs.length)}%`,
            x: '6px' 
        }}
      />

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative z-20 flex-1 py-2.5 text-sm font-semibold transition-all duration-300 ${
            activeTab === tab 
              ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' 
              : 'text-white/40 hover:text-white/70'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

const CrispNavMenu = () => {
  const [active, setActive] = useState(0);
  const items = [Layers, Zap, Bell, User];

  return (
    <div className="relative h-20 bg-[#121212] rounded-[24px] border border-white/10 flex items-center justify-around px-2 w-[320px] mx-auto shadow-2xl">
      {items.map((Icon, i) => (
        <button 
          key={i} 
          onClick={() => setActive(i)}
          className="relative w-16 h-full flex items-center justify-center focus:outline-none z-10"
        >
          {active === i && (
            <motion.div
              layoutId="navPill"
              className="absolute inset-0 m-auto w-12 h-12 bg-blue-600 rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.5)]"
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            />
          )}
          <Icon 
            size={24} 
            className={`relative z-10 transition-colors duration-300 ${active === i ? 'text-white' : 'text-white/30 hover:text-white/60'}`} 
          />
        </button>
      ))}
    </div>
  );
};

const PremiumCard = () => {
  return (
    <div className="relative h-56 w-full max-w-sm rounded-[28px] bg-gradient-to-br from-[#1c1c1e] to-black border border-white/10 shadow-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 p-7 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="w-12 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/5 flex items-center justify-center">
             <div className="w-7 h-5 bg-[#d4af37] rounded-[4px] shadow-inner" />
          </div>
          <Wifi className="text-white/20 rotate-90" />
        </div>
        <div>
           <p className="font-mono text-white/30 text-lg tracking-widest mb-2">4492 •••• •••• 8092</p>
           <div className="flex justify-between items-end">
             <h3 className="text-white font-medium tracking-wide">MAXIM</h3>
             <span className="text-xs text-white/30 font-mono">EXP 12/28</span>
           </div>
        </div>
      </div>
      
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px]" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[60px]" />
    </div>
  );
};

const CleanExpandingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-full w-full flex items-center justify-center bg-[#121212] rounded-3xl border border-white/5 min-h-[250px]">
      <AnimatePresence>
        {isOpen && (
          <>
            {[
              { icon: User, color: "bg-blue-600", x: -70, y: -40 },
              { icon: Settings, color: "bg-purple-600", x: 70, y: -40 },
              { icon: BarChart3, color: "bg-pink-600", x: 0, y: -80 }
            ].map((item, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{ scale: 1, x: item.x, y: item.y }}
                exit={{ scale: 0, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.03 }}
                className={`absolute w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg border border-white/10`}
              >
                <item.icon size={20} />
              </motion.button>
            ))}
          </>
        )}
      </AnimatePresence>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform active:scale-90 hover:scale-105"
      >
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }}>
          <Plus size={28} />
        </motion.div>
      </button>
      <p className="absolute bottom-6 text-xs text-white/20 font-mono">TAP CENTER</p>
    </div>
  );
};

const TransactionList = () => {
  const transactions = [
    { id: 1, title: "Apple Services", subtitle: "Subscription", amount: "-$14.99", icon: User, type: "out" },
    { id: 2, title: "Upwork Payout", subtitle: "Freelance", amount: "+$1,250.00", icon: ArrowDownLeft, type: "in" },
    { id: 3, title: "Uber Eats", subtitle: "Food & Drink", amount: "-$32.50", icon: Wallet, type: "out" },
  ];

  return (
    <div className="w-full space-y-3">
      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              tx.type === 'in' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white'
            }`}>
              <tx.icon size={18} />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white">{tx.title}</h4>
              <p className="text-xs text-white/40">{tx.subtitle}</p>
            </div>
          </div>
          <div className="text-right">
            <p className={`text-sm font-medium ${tx.type === 'in' ? 'text-green-400' : 'text-white'}`}>
              {tx.amount}
            </p>
            <p className="text-xs text-white/20">Today</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const DynamicIsland = () => {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const expandTimer = setTimeout(() => setExpanded(true), 800);
    const hideTimer = setTimeout(() => setIsVisible(false), 5800);
    
    return () => {
      clearTimeout(expandTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 h-20 flex items-start justify-center pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ width: 120, height: 35, borderRadius: 20, opacity: 0, y: -50 }}
            animate={{ 
              width: expanded ? 320 : 120, 
              height: expanded ? 60 : 35,
              borderRadius: 40,
              opacity: 1,
              y: 0
            }}
            exit={{ 
              opacity: 0, 
              y: -50, 
              scale: 0.9,
              filter: "blur(10px)" 
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-black border border-white/10 shadow-2xl overflow-hidden relative flex items-center justify-between px-4 pointer-events-auto"
            onClick={() => setExpanded(!expanded)}
          >
            {!expanded ? (
              <div className="w-full flex justify-center opacity-50"><div className="w-16 h-1 rounded-full bg-white/20" /></div>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Check size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider">Status</p>
                    <p className="text-sm font-semibold text-white">Connected</p>
                  </div>
                </div>
                <div className="h-full py-4 flex items-center">
                  <Wifi size={18} className="text-white" />
                </div>
                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] bg-white/30"
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AdvancedRevenueChart = () => {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);
  const [activeRange, setActiveRange] = useState('1M');
  
  const data = [45, 70, 50, 90, 65, 85, 55, 95, 75, 100, 85, 110, 95, 120, 105, 130];
  const maxVal = Math.max(...data);

  return (
    <div className="w-full min-h-[300px] bg-[#121212] rounded-[32px] p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between">
      
      <div className="flex justify-between items-start z-10">
        <div>
           <p className="text-white/40 text-sm font-medium mb-1">Total Revenue</p>
           <div className="flex items-baseline gap-2">
             <motion.h3 
               key={hoveredValue || "default"}
               initial={{ opacity: 0.8, y: 5 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl font-bold text-white tracking-tight"
             >
               {hoveredValue || "$12,402.50"}
             </motion.h3>
             {!hoveredValue && (
                <span className="text-green-400 text-sm font-medium flex items-center bg-green-500/10 px-2 py-0.5 rounded-full">
                  <TrendingUp size={12} className="mr-1" /> +14.5%
                </span>
             )}
           </div>
        </div>
        
        <div className="flex bg-white/5 rounded-full p-1 border border-white/5">
          {['1W', '1M', '3M', '1Y'].map((range) => (
             <button 
               key={range}
               onClick={() => setActiveRange(range)}
               className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                 activeRange === range ? 'bg-white text-black shadow-lg' : 'text-white/40 hover:text-white'
               }`}
             >
               {range}
             </button>
          ))}
        </div>
      </div>

      <div className="relative h-40 w-full mt-8 flex items-end justify-between gap-2 z-10 group">
         <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
            <div className="w-full h-px bg-white/20 border-t border-dashed border-white/50" />
            <div className="w-full h-px bg-white/20 border-t border-dashed border-white/50" />
            <div className="w-full h-px bg-white/20 border-t border-dashed border-white/50" />
         </div>

         {data.map((val, i) => (
            <div 
              key={i} 
              className="relative flex-1 h-full flex items-end group/bar"
              onMouseEnter={() => setHoveredValue(`$${(val * 120 + 50).toFixed(2)}`)}
              onMouseLeave={() => setHoveredValue(null)}
            >
               <div className="absolute bottom-0 left-1/2 w-px h-full bg-white/10 opacity-0 group-hover/bar:opacity-100 transition-opacity" />
               
               <motion.div 
                 initial={{ height: 0 }}
                 animate={{ height: `${(val / maxVal) * 100}%` }}
                 transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
                 className="w-full rounded-t-sm relative transition-all duration-300 group-hover/bar:bg-blue-400 group-hover:opacity-30 group-hover/bar:opacity-100"
               >
                 <div className={`absolute inset-0 rounded-t-sm ${
                    i === data.length - 1 ? 'bg-blue-500' : 'bg-blue-600/60'
                 }`} />
                 
                 <div className="absolute top-0 left-0 right-0 h-1 bg-white/50 opacity-0 group-hover/bar:opacity-100 blur-[2px] transition-opacity" />
               </motion.div>
            </div>
         ))}
      </div>
    </div>
  );
};

const LiquidSavingsCard = () => {
  return (
    <div className="lg:col-span-2 min-h-[250px] bg-[#121212] rounded-[32px] border border-white/10 relative overflow-hidden flex flex-col justify-between group">
      <div className="absolute inset-0 z-0 opacity-40">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-[200%] h-full text-blue-600/20 fill-current animate-[wave_10s_linear_infinite]">
          <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-[200%] h-full text-purple-600/20 fill-current animate-[wave_15s_linear_infinite_reverse]" style={{ opacity: 0.7 }}>
          <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 p-8 flex flex-col h-full justify-between">
         <div className="flex justify-between items-start">
            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
               <Target className="text-white" size={24} />
            </div>
            <button className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-xs font-medium hover:bg-white/10 transition-colors">
               Edit Goal
            </button>
         </div>

         <div>
            <p className="text-white/50 text-sm font-medium uppercase tracking-wider mb-2">Savings Goal</p>
            <div className="flex items-baseline gap-3">
               <h3 className="text-4xl font-bold text-white">$8,240</h3>
               <span className="text-white/30 text-xl font-medium">/ $10,000</span>
            </div>
            
            <div className="mt-6 w-full h-2 bg-white/10 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "82%" }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
               >
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
               </motion.div>
            </div>
            <p className="text-xs text-white/40 mt-3 flex items-center">
               <Zap size={12} className="mr-1 text-yellow-400" /> You're 82% there! Keep it up.
            </p>
         </div>
      </div>
    </div>
  );
};


export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#000000] text-slate-200 overflow-x-hidden font-sans pb-12">
      
      <div className="fixed inset-0 z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <DynamicIsland />

      <main className="relative z-10 container mx-auto px-4 py-20 flex flex-col gap-8 max-w-4xl">
        
        <section className="space-y-8 flex flex-col items-center">
           <IOSSegmentedControl />
           <h1 className="text-4xl md:text-5xl font-bold text-center text-white tracking-tight">
             Dashboard
           </h1>
        </section>

        <section className="grid md:grid-cols-2 gap-6 items-start">
           <div className="space-y-4">
              <PremiumCard />
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#121212] border border-white/10 w-full max-w-sm">
                 <span className="text-sm font-medium text-white/70">Biometric Access</span>
                 <CleanToggle />
              </div>
           </div>

           <div className="space-y-2 w-full max-w-sm">
              <div className="flex items-center justify-between px-2 mb-2">
                 <h3 className="text-lg font-bold text-white">Recent</h3>
                 <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <Search size={16} className="text-white/60" />
                 </button>
              </div>
              <TransactionList />
           </div>
        </section>

        <section className="space-y-6">
           <div className="text-center opacity-40 mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest">Main Navigation</span>
           </div>
           
           <CrispNavMenu />

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              
              <LiquidSavingsCard />

              <div>
                <CleanExpandingMenu />
              </div>
           </div>
        </section>
        
        <section>
           <AdvancedRevenueChart />
        </section>

      </main>

      <style>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}