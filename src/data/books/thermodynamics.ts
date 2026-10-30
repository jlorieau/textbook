import { defineBook, type BookData } from '../../types/book';

export const thermodynamicsBook: BookData = defineBook({
  id: 'thermo',
  volume: 'Volume I',
  title: 'Curriculum in Motion: Thermodynamics',
  seriesTitle: 'Curriculum in Motion',
  subjectTitle: 'Thermodynamics',
  tagline: 'Energy transformations, state functions, enthalpy, and entropy.',
  description:
    'Ideal Gas Law, Enthalpy, Internal Energy, Entropy, Gibbs Free Energy, Equilibria',
  coverImage: '/thermodynamics-cover.jpg',
  colorScheme: 'amber',
  parts: [
    {
      title: '📐 Background',
      chapters: [
        {
          id: 'calculus',
          title: "Why You Can't Master Science Without Calculus",
          shortTitle: 'Calculus Foundations',
          duration: '24:24',
          youtubeId: '_yT3U_3M_DY',
          summary:
            'Learning science and engineering without calculus is like going to culinary school to become a chef, but leaving with the skills of a cook who can only follow recipes.',
          timestamps: [
            { time: '0:04', seconds: 4, label: 'Introduction' },
            { time: '0:58', seconds: 58, label: 'Why is Calculus Important?' },
            { time: '3:40', seconds: 220, label: 'Where Calculus Comes From' },
            { time: '7:47', seconds: 467, label: 'Where Derivatives Come From' },
            { time: '12:57', seconds: 777, label: 'Where Integrals Come From' },
            { time: '16:00', seconds: 960, label: 'Speed Dating - Derivatives' },
            { time: '20:16', seconds: 1216, label: 'Speed Dating - Integrals' },
            { time: '25:11', seconds: 1511, label: 'Key Takeaways' },
          ],
          keyEquations: [
            '\\frac{df}{dx} = \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x) - f(x)}{\\Delta x}',
            '\\int_a^b f(x) dx = F(b) - F(a)',
          ],
        },
        {
          id: 'multivariate-derivatives',
          title: 'Partial Derivatives and How Nature is Built on Them',
          shortTitle: 'Multivariate Derivatives',
          duration: '27:25',
          youtubeId: 'T_exLbnfLOo',
          summary:
            "Introductory calculus courses stop at single-variable slopes and tangent lines, but nature doesn't operate in one dimension.",
          timestamps: [
            { time: '0:00', seconds: 0, label: 'Introduction' },
            { time: '0:45', seconds: 45, label: 'Linear Partial Derivatives' },
            { time: '3:53', seconds: 233, label: 'Non-Linear Partial Derivatives' },
            { time: '16:03', seconds: 963, label: 'Differential Equations' },
            { time: '17:28', seconds: 1048, label: 'ODEs: The Harmonic Oscillator' },
            { time: '23:32', seconds: 1412, label: 'Partial Differential Equations (PDEs)' },
            { time: '27:39', seconds: 1659, label: 'Summary' },
          ],
          keyEquations: [
            '\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}',
            'df = \\left(\\frac{\\partial f}{\\partial x}\\right)_y dx + \\left(\\frac{\\partial f}{\\partial y}\\right)_x dy',
          ],
        },
      ],
    },
    {
      title: '🌡️ Enthalpy, Internal Energy, Heat and Work',
      chapters: [
        {
          id: 'path-and-state',
          title: 'Why Thermodynamics Needs Both State and Path Functions',
          shortTitle: 'Path vs. State Variables',
          duration: '13:21',
          youtubeId: '1uXtZ0x-SCE',
          summary:
            'Standard textbooks introduce state and path functions with abstract equations, leaving students wondering why physics needs both.',
          timestamps: [
            { time: '0:00', seconds: 0, label: 'Introduction: What are Path Functions?' },
            { time: '3:16', seconds: 196, label: 'Pre-requisites' },
            { time: '3:30', seconds: 210, label: 'Enthalpy, Internal Energy, Work and Heat' },
            { time: '5:53', seconds: 353, label: 'Irreversible Work' },
            { time: '6:33', seconds: 393, label: 'Reversible Work' },
            { time: '8:17', seconds: 497, label: 'Irreversible Compression/Decompression Cycle' },
            { time: '9:13', seconds: 553, label: 'Reversible Compression/Decompression Cycle' },
            { time: '10:07', seconds: 607, label: '3-Point Thermodynamic Cycle' },
            { time: '12:27', seconds: 747, label: 'Cyclic Integrals' },
            { time: '12:51', seconds: 771, label: 'Summary' },
          ],
          keyEquations: [
            'dU = \\delta q + \\delta w',
            '\\oint dU = 0, \\quad \\oint \\delta w \\neq 0',
          ],
        },
        {
          id: 'internal-energy-enthalpy',
          title: 'Why Thermodynamics Needs Both Internal Energy and Enthalpy',
          shortTitle: 'Internal Energy & Enthalpy',
          duration: '18:50',
          youtubeId: '6ka-H1xyLUA',
          summary:
            'Why does thermodynamics need two different definitions of energy when heating a gas requires more heat than its internal energy increase?',
          timestamps: [
            { time: '0:00', seconds: 0, label: 'Introduction' },
            { time: '0:57', seconds: 57, label: 'Internal Energy' },
            { time: '3:12', seconds: 192, label: 'Enthalpy' },
            { time: '6:03', seconds: 363, label: 'Heat Capacity' },
            { time: '9:50', seconds: 590, label: 'Molecular Interpretation' },
            { time: '12:23', seconds: 743, label: 'Liquids and Solids' },
            { time: '13:40', seconds: 820, label: 'Common Misconceptions' },
            { time: '18:25', seconds: 1105, label: 'Summary' },
          ],
          keyEquations: [
            'H = U + PV',
            'dH = dU + P\\,dV + V\\,dP = \\delta q_p',
            'C_p - C_v = R',
          ],
        },
        {
          id: 'thermochemistry',
          title: 'Thermochemistry, a Cornerstone of Chemistry',
          shortTitle: 'Thermochemistry',
          duration: '15:39',
          youtubeId: 'CSii7oMhT6M',
          summary:
            "We explore thermochemistry and reveal how enthalpy's path independence allows us to predict its value for any reaction.",
          timestamps: [
            { time: '0:00', seconds: 0, label: 'Introduction' },
            { time: '1:02', seconds: 62, label: "Hess's Law & Path Independence" },
            { time: '1:44', seconds: 104, label: 'The 2500°C Thermite Reaction' },
            { time: '3:35', seconds: 215, label: 'Standard Heats of Formation' },
            { time: '6:59', seconds: 419, label: 'Standard Enthalpy & Standard State' },
            { time: '7:54', seconds: 474, label: "Kirchhoff's Law & Temperature Dependence" },
            { time: '10:01', seconds: 601, label: 'Common Misconceptions (ATP & Reference States)' },
            { time: '14:30', seconds: 870, label: 'Summary & Key Takeaways' },
          ],
          keyEquations: [
            '\\Delta H_{\\text{rxn}}^\\circ = \\sum_i \\nu_i \\Delta H_{f,i}^\\circ',
            '\\Delta H_{\\text{rxn}}^\\circ(T_2) = \\Delta H_{\\text{rxn}}^\\circ(T_1) + \\int_{T_1}^{T_2} \\Delta C_p^\\circ\\,dT',
          ],
        },
      ],
    },
  ],
  referencesTitle: '📚 Bibliography & Reading',
  references: [
    {
      category: 'Books',
      items: [
        'Atkins, Peter, and Julio de Paula. *Physical Chemistry*, 9th Edition. W. H. Freeman, 2010.',
        'Engel, T., G. Drobny, and P. Reid. *Physical Chemistry for the Life Sciences*. Pearson-Prentice-Hall, 2007.',
        'McQuarrie, Donald A., and John D. Simon. *Physical Chemistry: A Molecular Approach*. University Science Books, 1997.',
        'Schroeder, Daniel V. *An Introduction to Thermal Physics*. Internat. ed. Addison Wesley, 2000.',
        'Silbey, Robert J., Robert A. Alberty, George A. Papadantonakis, and Moungi G. Bawendi. *Physical Chemistry*. Wiley, 2021.',
      ],
    },
  ],
});
