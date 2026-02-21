export type Profile = {
  name: string
  role: string
  location: string
  tagline: string
  now: string
  availability: string
}

export const profile: Profile = {
  name: 'Tyler',
  role: 'Frontend Engineer',
  location: 'Remote',
  tagline: 'Designing minimal, interaction-rich web experiences.',
  now: 'Exploring Bento layouts, motion systems, and calm design for the web.',
  availability: 'Available for selected collaborations.',
}

// Structured profile data for the About section
export const profileData = {
  about: {
    title: 'WHO',
    content:
      "Hi. I'm Tyler, A curious and detail-oriented design & engineering student. I focus on using AI as a force multiplier to turn complex ideas into tangible products\u2014fast. I care about the details that compound into trust: typography, rhythm, motion, and responsiveness.",
  },
  now: {
    title: 'NOW',
    education: {
      label: 'Education',
      items: [
        {
          institution: "Xi'an University of Science and Technology",
          degree: 'Bachelor Degree \u2013 Computer Science',
          duration: '2023\u20132026',
        },
        {
          institution: 'Victoria University of Wellington',
          degree: 'Bachelor Degree \u2013 Computer Science',
          duration: '2026\u20132027',
        },
      ],
    },
    languages: {
      label: 'Languages',
      items: [
        { name: 'Chinese', level: 'Native language' },
        { name: 'English', level: 'TOEIC C1 level' },
      ],
    },
  },
}
