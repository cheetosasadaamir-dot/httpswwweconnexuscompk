export interface PhysicsSubtopic {
  title: string;
  href: string;
  blurb: string;
}

export interface PhysicsTopic {
  id: 'mechanics' | 'electricity' | 'waves' | 'quantum';
  title: string;
  description: string;
  subtopics: PhysicsSubtopic[];
}

export const physicsTopics: PhysicsTopic[] = [
  {
    id: 'mechanics',
    title: 'Mechanics & Materials',
    description: 'Motion, forces, energy, and the deformation of solids.',
    subtopics: [
      { title: 'Kinematics', href: '/physics/mechanics/kinematics', blurb: 'SUVAT equations, projectile motion, displacement-time graphs.' },
      { title: 'Dynamics', href: '/physics/mechanics/dynamics', blurb: "Newton's laws, momentum, impulse, and conservation principles." },
      { title: 'Deformation of Solids', href: '/physics/mechanics/deformation', blurb: "Hooke's law, Young modulus, stress, strain, and elastic energy." },
    ],
  },
  {
    id: 'electricity',
    title: 'Electricity & Magnetism',
    description: 'Charge, current, fields, and the storage of electrical energy.',
    subtopics: [
      { title: 'Circuits', href: '/physics/electricity/circuits', blurb: "Ohm's law, Kirchhoff's rules, EMF, internal resistance." },
      { title: 'Electric & Magnetic Fields', href: '/physics/electricity/fields', blurb: 'Coulomb force, field strength, motion of charges in fields.' },
      { title: 'Capacitance', href: '/physics/electricity/capacitance', blurb: 'Energy storage, charging/discharging exponentials.' },
    ],
  },
  {
    id: 'waves',
    title: 'Waves & Optics',
    description: 'Wave behaviour, superposition, and the geometry of light.',
    subtopics: [
      { title: 'Superposition', href: '/physics/waves/superposition', blurb: 'Phase, coherence, constructive vs destructive interference.' },
      { title: 'Interference & Diffraction', href: '/physics/waves/interference', blurb: 'Double-slit, diffraction grating, path difference.' },
      { title: 'Lenses & Optics', href: '/physics/waves/lenses', blurb: 'Refraction, thin lens equation, image formation.' },
    ],
  },
  {
    id: 'quantum',
    title: 'Quantum & Nuclear Physics',
    description: 'The discrete nature of energy, matter, and the atomic nucleus.',
    subtopics: [
      { title: 'Photons & Photoelectric Effect', href: '/physics/quantum/photons', blurb: 'Quantisation of light, work function, stopping potential.' },
      { title: 'Radioactivity', href: '/physics/quantum/radioactivity', blurb: 'Decay law, half-life, alpha/beta/gamma radiation.' },
      { title: 'Particle Physics', href: '/physics/quantum/particles', blurb: 'Standard model, quarks, leptons, fundamental interactions.' },
    ],
  },
];
