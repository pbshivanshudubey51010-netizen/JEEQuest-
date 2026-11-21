const phyClass11Chapters = [
  { id: "u1", name: "Unit 1: Units & Measurements" },
  { id: "u2", name: "Unit 2: Kinematics" },
  { id: "u3", name: "Unit 3: Laws of Motion" },
  { id: "u4", name: "Unit 4: Work, Energy & Power" },
  { id: "u5", name: "Unit 5: Rotational Motion" },
  { id: "u6", name: "Unit 6: Gravitation" },
  { id: "u7", name: "Unit 7: Properties of Solids & Liquids" },
  { id: "u8", name: "Unit 8: Thermodynamics" },
  { id: "u9", name: "Unit 9: Kinetic Theory of Gases" },
  { id: "u10", name: "Unit 10: Oscillations & Waves" }
];

const phyClass11DB = {
  u1: [
    () => {
      let a = rand(1, 3), b = rand(1, 3), c = rand(1, 2);
      let ea = rand(1, 3), eb = rand(1, 3), ec = rand(1, 4);
      let err = a * ea + b * eb + c * ec;
      return {
        q: `Ek physical quantity \\( P = \\frac{A^${a} B^${b}}{C^${c}} \\) hai. Agar \\( A, B, C \\) mein percentage errors kramashah \\( ${ea}\\%, ${eb}\\%, ${ec}\\% \\) hain, toh \\( P \\) mein maximum percentage error kya hoga?`,
        ans: `${err}%`, opts: [`${err}%`, `${a*ea + b*eb - c*ec}%`, `${ea + eb + ec}%`, `${err + 3}%`],
        sol: `\\( \\frac{\\Delta P}{P}\\% = ${a}(${ea}\\%) + ${b}(${eb}\\%) + ${c}(${ec}\\%) = ${err}\\% \\)`
      };
    },
    () => {
      let list = [
        { q: "Planck's constant (h) ka dimensional formula kya hai?", a: "[ML²T⁻¹]", o: ["[ML²T⁻¹]", "[ML²T⁻²]", "[MLT⁻¹]", "[M⁰L²T⁻¹]"], s: "\\( E = h\\nu \\implies [h] = \\frac{[ML^2T^{-2}]}{[T^{-1}]} = [ML^2T^{-1}] \\)" },
        { q: "Coefficient of Viscosity (η) ka dimensional formula kya hai?", a: "[ML⁻¹T⁻¹]", o: ["[ML⁻¹T⁻¹]", "[ML⁻¹T⁻²]", "[MLT⁻¹]", "[M⁻¹LT⁻¹]"], s: "\\( F = 6\\pi\\eta r v \\implies [\\eta] = [ML^{-1}T^{-1}] \\)" },
        { q: "Universal Gravitational Constant (G) ka dimensional formula kya hai?", a: "[M⁻¹L³T⁻²]", o: ["[M⁻¹L³T⁻²]", "[ML³T⁻²]", "[M⁻¹L²T⁻²]", "[ML²T⁻²]"], s: "\\( G = \\frac{Fr^2}{m_1 m_2} \\implies [G] = [M^{-1}L^3T^{-2}] \\)" }
      ];
      let it = pick(list);
      return { q: it.q, ans: it.a, opts: it.o, sol: it.s };
    }
  ],
  u2: [
    () => {
      let u = rand(2, 6) * 10, h = (u * u) / 20;
      return {
        q: `Ek ball ko ground se \\( u = ${u}\\text{ m/s} \\) se vertically upward phenka gaya. Maximum height kya hogi? (\\( g = 10\\text{ m/s}^2 \\))`,
        ans: `${h} m`, opts: [`${h} m`, `${h*2} m`, `${h+15} m`, `${Math.abs(h-10)} m`],
        sol: `\\( H_{\\max} = \\frac{u^2}{2g} = \\frac{${u}^2}{20} = ${h}\\text{ m} \\)`
      };
    },
    () => {
      let u = rand(2, 5) * 10, r = (u * u) / 10;
      return {
        q: `Ek projectile ko \\( 45^\\circ \\) angle par \\( ${u}\\text{ m/s} \\) se fire kiya gaya. Horizontal range kitni hogi? (\\( g = 10\\text{ m/s}^2 \\))`,
        ans: `${r} m`, opts: [`${r} m`, `${r/2} m`, `${r+20} m`, `${r*2} m`],
        sol: `\\( R = \\frac{u^2 \\sin(90^\\circ)}{g} = \\frac{${u}^2}{10} = ${r}\\text{ m} \\)`
      };
    }
  ],
  u3: [
    () => {
      let m = rand(3, 9), a = rand(2, 5), f = rand(35, 65), fk = f - m * a;
      return {
        q: `Ek \\( ${m}\\text{ kg} \\) block par \\( ${f}\\text{ N} \\) force lagane par acceleration \\( ${a}\\text{ m/s}^2 \\) milta hai. Kinetic friction force kya hoga?`,
        ans: `${fk} N`, opts: [`${fk} N`, `${m*a} N`, `${f+m*a} N`, `${fk+5} N`],
        sol: `\\( F - f_k = ma \\implies f_k = ${f} - (${m} \\times ${a}) = ${fk}\\text{ N} \\)`
      };
    },
    () => {
      let m = rand(40, 70), a = rand(2, 5), n = m * (10 + a);
      return {
        q: `Ek \\( ${m}\\text{ kg} \\) ka vyakti lift mein hai jo \\( ${a}\\text{ m/s}^2 \\) se upar ja rahi hai. Apparent weight kya hoga? (\\( g = 10\\text{ m/s}^2 \\))`,
        ans: `${n} N`, opts: [`${n} N`, `${m*10} N`, `${m*(10-a)} N`, `${n+45} N`],
        sol: `\\( N = m(g + a) = ${m}(10 + ${a}) = ${n}\\text{ N} \\)`
      };
    }
  ],
  u4: [
    () => {
      let m = rand(2, 6), v1 = rand(2, 4), v2 = v1 + rand(2, 5), w = 0.5 * m * (v2 * v2 - v1 * v1);
      return {
        q: `Ek \\( ${m}\\text{ kg} \\) body ki speed \\( ${v1}\\text{ m/s} \\) se \\( ${v2}\\text{ m/s} \\) ho jati hai. Net work done kitna hoga?`,
        ans: `${w} J`, opts: [`${w} J`, `${w+15} J`, `${0.5*m*v2*v2} J`, `${Math.abs(w-10)} J`],
        sol: `Work-Energy Theorem: \\( W = \\frac{1}{2}m(v_2^2 - v_1^2) = 0.5(${m})(${v2*v2} - ${v1*v1}) = ${w}\\text{ J} \\)`
      };
    },
    () => {
      let k = rand(100, 400), x = rand(2, 5) * 0.1, u = (0.5 * k * x * x).toFixed(2);
      return {
        q: `Spring constant \\( k = ${k}\\text{ N/m} \\) wali spring ko \\( ${x.toFixed(1)}\\text{ m} \\) compress karne par stored potential energy kya hogi?`,
        ans: `${u} J`, opts: [`${u} J`, `${(k*x).toFixed(2)} J`, `${(k*x*x).toFixed(2)} J`, `${(parseFloat(u)+4).toFixed(2)} J`],
        sol: `\\( U = \\frac{1}{2}kx^2 = 0.5 \\times ${k} \\times (${x.toFixed(1)})^2 = ${u}\\text{ J} \\)`
      };
    }
  ],
  u5: [
    () => {
      let m = rand(2, 6), r = rand(1, 3), i = 0.5 * m * r * r;
      return {
        q: `Ek uniform solid disc (mass \\( ${m}\\text{ kg} \\), radius \\( ${r}\\text{ m} \\)) ka central axis ke about Moment of Inertia kya hoga?`,
        ans: `${i} kg·m²`, opts: [`${i} kg·m²`, `${m*r*r} kg·m²`, `${(0.4*m*r*r).toFixed(1)} kg·m²`, `${i+3} kg·m²`],
        sol: `Solid disc: \\( I = \\frac{1}{2}MR^2 = 0.5 \\times ${m} \\times ${r}^2 = ${i}\\text{ kg}\\cdot\\text{m}^2 \\)`
      };
    },
    () => {
      let i = rand(2, 8), alpha = rand(2, 6), tau = i * alpha;
      return {
        q: `Moment of inertia \\( I = ${i}\\text{ kg}\\cdot\\text{m}^2 \\) wale wheel mein \\( \\alpha = ${alpha}\\text{ rad/s}^2 \\) angular acceleration ke liye kitna torque chahiye?`,
        ans: `${tau} N·m`, opts: [`${tau} N·m`, `${(i/alpha).toFixed(1)} N·m`, `${tau*2} N·m`, `${tau+5} N·m`],
        sol: `\\( \\tau = I\\alpha = ${i} \\times ${alpha} = ${tau}\\text{ N}\\cdot\\text{m} \\)`
      };
    }
  ],
  u6: [
    () => {
      let n = rand(1, 3), gNew = (10 / Math.pow(1 + n, 2)).toFixed(2);
      return {
        q: `Earth surface se \\( h = ${n}R \\) height par acceleration due to gravity (\\( g' \\)) kya hogi? (Surface par \\( g = 10\\text{ m/s}^2 \\))`,
        ans: `${gNew} m/s²`, opts: [`${gNew} m/s²`, `${(10/(1+n)).toFixed(2)} m/s²`, `10.00 m/s²`, `${(gNew*2).toFixed(2)} m/s²`],
        sol: `\\( g' = \\frac{g}{(1 + h/R)^2} = \\frac{10}{(1 + ${n})^2} = ${gNew}\\text{ m/s}^2 \\)`
      };
    },
    () => {
      let f = rand(2, 4), ve = (11.2 * f).toFixed(1);
      return {
        q: `Kisi planet ka mass Earth se \\( ${f*f} \\) guna aur radius Earth ke barabar hai. Wahan escape velocity kya hogi? (\\( v_e = 11.2\\text{ km/s} \\))`,
        ans: `${ve} km/s`, opts: [`${ve} km/s`, `${(11.2*f*f).toFixed(1)} km/s`, `11.2 km/s`, `${(11.2/f).toFixed(1)} km/s`],
        sol: `\\( v_e = \\sqrt{\\frac{2GM}{R}} \\propto \\sqrt{M} \\implies v_e' = ${f} \\times 11.2 = ${ve}\\text{ km/s} \\)`
      };
    }
  ],
  u7: [
    () => {
      let h = rand(2, 10), p = (1000 * 10 * h) / 1000;
      return {
        q: `Water (\\( \\rho = 1000\\text{ kg/m}^3 \\)) ki surface se \\( ${h}\\text{ m} \\) neeche gauge pressure kya hoga? (\\( g = 10\\text{ m/s}^2 \\))`,
        ans: `${p} kPa`, opts: [`${p} kPa`, `${p*10} kPa`, `${p/2} kPa`, `${p+15} kPa`],
        sol: `\\( P = \\rho gh = 1000 \\times 10 \\times ${h} = ${p}\\text{ kPa} \\)`
      };
    },
    () => {
      let m = rand(2, 5), s = 4200, dt = rand(10, 30), q = (m * s * dt) / 1000;
      return {
        q: `\\( ${m}\\text{ kg} \\) paani ka temperature \\( ${dt}^\\circ\\text{C} \\) badhane ke liye kitni heat chahiye? (\\( s = 4200\\text{ J/kg}\\cdot^\\circ\\text{C} \\))`,
        ans: `${q} kJ`, opts: [`${q} kJ`, `${q*2} kJ`, `${(q/2).toFixed(1)} kJ`, `${q+25} kJ`],
        sol: `Calorimetry: \\( Q = ms\\Delta T = ${m} \\times 4200 \\times ${dt} = ${q}\\text{ kJ} \\)`
      };
    }
  ],
  u8: [
    () => {
      let dq = rand(200, 500), dw = rand(50, 150), du = dq - dw;
      return {
        q: `System ko \\( ${dq}\\text{ J} \\) heat dene par woh \\( ${dw}\\text{ J} \\) work karta hai. Internal energy mein change (\\( \\Delta U \\)) kya hoga?`,
        ans: `${du} J`, opts: [`${du} J`, `${dq+dw} J`, `${dw-dq} J`, `${du+45} J`],
        sol: `First Law: \\( \\Delta U = \\Delta Q - \\Delta W = ${dq} - ${dw} = ${du}\\text{ J} \\)`
      };
    },
    () => {
      let t1 = rand(300, 400), t2 = rand(500, 800), eff = (((1 - t1 / t2)) * 100).toFixed(1);
      return {
        q: `Carnot engine \\( T_1 = ${t2}\\text{ K} \\) (source) aur \\( T_2 = ${t1}\\text{ K} \\) (sink) ke beech kaam kar raha hai. Efficiency kitni hogi?`,
        ans: `${eff}%`, opts: [`${eff}%`, `${((t1/t2)*100).toFixed(1)}%`, `${(parseFloat(eff)+10).toFixed(1)}%`, `50.0%`],
        sol: `\\( \\eta = \\left(1 - \\frac{${t1}}{${t2}}\\right) \\times 100 = ${eff}\\% \\)`
      };
    }
  ],
  u9: [
    () => {
      let n = rand(2, 5), dt = rand(10, 30), du = (1.5 * n * 8.3 * dt).toFixed(1);
      return {
        q: `\\( ${n}\\text{ moles} \\) monoatomic ideal gas ka temperature \\( ${dt}\\text{ K} \\) badhaya jata hai. Internal energy mein change kya hoga? (\\( R = 8.3\\text{ J/mol}\\cdot\\text{K} \\))`,
        ans: `${du} J`, opts: [`${du} J`, `${(2.5*n*8.3*dt).toFixed(1)} J`, `${(n*8.3*dt).toFixed(1)} J`, `${(parseFloat(du)+50).toFixed(1)} J`],
        sol: `Monoatomic gas ke liye \\( f = 3 \\implies \\Delta U = \\frac{3}{2}nR\\Delta T = 1.5 \\times ${n} \\times 8.3 \\times ${dt} = ${du}\\text{ J} \\)`
      };
    },
    () => {
      let t1 = 300, factor = pick([4, 9]), t2 = t1 * factor, vFactor = Math.sqrt(factor);
      return {
        q: `Ek ideal gas ka absolute temperature \\( ${t1}\\text{ K} \\) se badhakar \\( ${t2}\\text{ K} \\) kar diya jata hai. Gas molecules ki RMS speed kitne guna ho jayegi?`,
        ans: `${vFactor} times`, opts: [`${vFactor} times`, `${factor} times`, `${factor*factor} times`, `Same rahegi`],
        
