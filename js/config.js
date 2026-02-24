// =====================================================
// Site Configuration — fill in your real content here
// =====================================================

const siteConfig = {

  // ---- Projects & Research -------------------------
  projects: [
    {
      title: "Project Title",
      description: "A brief description of what this project does and why it matters. What problem does it solve? What methods did you use?",
      tags: ["Python", "Risk Modelling", "Factor Model"],
      link: ""   // leave empty to hide the link
    },
    {
      title: "Another Project",
      description: "Description of a second project. Keep it concise — one to three sentences.",
      tags: ["Statistics", "Fixed Income"],
      link: ""
    }
  ],

  // ---- Experience (Work + Education) ---------------
  timeline: [
    {
      type: "work",                     // "work" | "education"
      role: "Investment Risk Analyst Intern",
      organization: "Company Name",
      location: "Toronto, ON",
      date: "May 2024 – Aug 2024",
      points: [
        "Describe a key responsibility or achievement here.",
        "Another bullet point with a quantified result if possible.",
        "Third bullet point."
      ]
    },
    {
      type: "education",
      role: "Bachelor of Commerce — Finance & Mathematics",
      organization: "University of Toronto",
      location: "Toronto, ON",
      date: "2022 – Present",
      points: [
        "Relevant coursework: Derivatives, Fixed Income, Econometrics, Probability Theory.",
        "Add any honours, GPA, or scholarship here."
      ]
    }
  ],

  // ---- Writing (leave empty until you have posts) --
  writing: [
    // {
    //   title: "Post title",
    //   date: "February 2026",
    //   excerpt: "One sentence teaser for the post.",
    //   link: "posts/post-slug.html"
    // }
  ]

};
