import type { BookData } from '../../types/book';

export const quantumMechanicsBook: BookData = {
  id: 'qm',
  volume: 'Volume II',
  title: 'Book of Quantum Mechanics',
  tagline: 'Mathematical foundations, complex analysis, and wave mechanics.',
  description:
    'Wave-Particle Duality, Schrodinger Equation, Hydrogen Atom, Electronic Hamiltonian, Spectroscopy',
  coverImage: '/quantum-mechanics-cover.jpg',
  colorScheme: 'blue',
  chapters: [
    {
      id: 'functions',
      title: "What Most Don't Get About Functions",
      shortTitle: 'Functions & Validity Domains',
      duration: '11:42',
      youtubeId: 'KCFKsyrFnnw',
      summary:
        'Functions are the hidden infrastructure of the physical universe, yet most math classes treat them as rigid black boxes where numbers go in and numbers come out.',
      timestamps: [
        { time: '0:00', seconds: 0, label: 'Start' },
        { time: '0:04', seconds: 4, label: 'Introduction' },
        { time: '0:43', seconds: 43, label: 'Linear Functions' },
        { time: '3:35', seconds: 215, label: 'Linear Plots' },
        { time: '5:41', seconds: 341, label: 'Higher Order Polynomials' },
        { time: '6:47', seconds: 407, label: 'Quadratic Pricing Example' },
        { time: '9:21', seconds: 561, label: 'Quadratic Plot' },
        { time: '11:13', seconds: 673, label: 'Level 2' },
        { time: '11:17', seconds: 677, label: 'Function Domains' },
      ],
      keyEquations: [
        'f: X \\to Y, \\quad y = f(x)',
        'E = \\gamma m c^2 = \\frac{m c^2}{\\sqrt{1 - \\frac{v^2}{c^2}}}',
      ],
      problemSet: {
        title: 'Master Functions: 5 Practice Problems',
        youtubeId: 'pgZk5ncHdpo',
        duration: '14:20',
        summary:
          'Mastering functions requires more than memorizing f(x) notation—you need to understand domain boundaries, coordinate system transformations, physical assumptions, and exponential growth models.',
        timestamps: [
          { time: '0:00', seconds: 0, label: 'Start' },
          { time: '0:11', seconds: 11, label: 'Question 1: Unit Circle Problem' },
          { time: '2:38', seconds: 158, label: 'Question 2: Parametric Functions' },
          { time: '4:23', seconds: 263, label: 'Question 3: Equivalent Functions' },
          { time: '7:29', seconds: 449, label: 'Question 4: Approximations and Errors' },
          { time: '10:01', seconds: 601, label: 'Question 5: Developing a function' },
        ],
      },
    },
    {
      id: 'complex-numbers',
      title: "Why You Can't Master Physics Without Complex Numbers",
      shortTitle: 'Complex Numbers & Phase',
      duration: '09:15',
      youtubeId: 'jvFLJieOgLg',
      summary:
        'We learn early on that i² = -1, but calling complex numbers "imaginary" is an accident of history that obscures their geometric reality.',
      timestamps: [
        { time: '0:00', seconds: 0, label: 'Introduction' },
        { time: '0:38', seconds: 38, label: 'Numbers in 1 Dimension' },
        { time: '1:39', seconds: 99, label: 'Numbers in 2 Dimensions & Argand Diagrams' },
        { time: '2:10', seconds: 130, label: 'Magnitude & Complex Conjugates' },
        { time: '2:56', seconds: 176, label: "Phase Angle & Euler's Formula" },
        { time: '6:25', seconds: 385, label: 'Frequencies, Waves & Periodicity' },
        { time: '8:47', seconds: 527, label: 'Summary' },
      ],
      keyEquations: [
        'z = a + ib = r e^{i\\theta}',
        'e^{i\\theta} = \\cos\\theta + i\\sin\\theta',
        'P(x) = |\\psi(x)|^2 = \\psi^*(x)\\psi(x)',
      ],
      problemSet: {
        title: 'Master Complex Numbers: 4 Essential Practice Problems',
        youtubeId: 'C25KaknxsAQ',
        duration: '06:37',
        summary:
          'Mastering complex numbers requires more than memorizing formulas—you need to understand their geometry, phase, and the time evolution of frequencies.',
        timestamps: [
          { time: '0:00', seconds: 0, label: 'Introduction' },
          { time: '0:15', seconds: 15, label: 'Problem 1: Addition of Complex Numbers' },
          { time: '1:04', seconds: 64, label: 'Problem 2: Magnitude & Complex Conjugate' },
          { time: '2:26', seconds: 146, label: "Problem 3: Phase Angle & Euler's Formula" },
          { time: '4:48', seconds: 288, label: 'Problem 4: Wave Frequency & Phase Evolution' },
        ],
      },
    },
    {
      id: 'calculus',
      title: "Why You Can't Master Science Without Calculus",
      shortTitle: 'Calculus Foundations',
      duration: '26:15',
      youtubeId: '-UWaZOkkPZ4',
      summary:
        'Learning science and engineering without calculus is like going to culinary school to become a chef, but leaving with the skills of a cook who can only follow recipes.',
      timestamps: [
        { time: '0:00', seconds: 0, label: 'Start' },
        { time: '0:04', seconds: 4, label: 'Intro' },
        { time: '0:52', seconds: 52, label: 'Title Card' },
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
      id: 'coordinate-systems',
      title: 'Why Cartesian Makes Math Harder Than It Needs to Be',
      shortTitle: 'Curvilinear Coordinate Systems',
      duration: '20:45',
      youtubeId: 'szI2Ioh9w20',
      summary:
        'Doing math and calculus in Cartesian coordinates is like navigating an entire road trip solely from a satellite view—convenient on a flat map, but completely unnatural when the terrain curves.',
      timestamps: [
        { time: '0:00', seconds: 0, label: 'Intro' },
        { time: '1:25', seconds: 85, label: 'Polar Coordinates' },
        { time: '8:59', seconds: 539, label: 'Jacobians' },
        { time: '14:02', seconds: 842, label: 'Spherical Polar Coordinates' },
        { time: '20:01', seconds: 1201, label: 'Summary' },
      ],
      keyEquations: [
        'dV = dx\\,dy\\,dz = r^2 \\sin\\theta\\,dr\\,d\\theta\\,d\\phi',
        'x = r \\sin\\theta \\cos\\phi, \\quad y = r \\sin\\theta \\sin\\phi, \\quad z = r \\cos\\theta',
      ],
      // No problemSet here — demonstrates clean layout when problem set is omitted!
    },
    {
      id: 'multivariate-derivatives',
      title: 'Partial Derivatives and How Nature is Built on Them',
      shortTitle: 'Multivariate Derivatives',
      duration: '28:15',
      youtubeId: 'mCXxHQDrFnA',
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
};
