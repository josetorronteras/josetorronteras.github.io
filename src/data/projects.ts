export type Project = {
  title: string;
  techs: string[];
  link: string;
  description: string;
  isComingSoon?: boolean;
};

export const projects: Project[] = [
  {
    title: "Crypto live activity",
    techs: [
      "swiftui",
      "live-activities",
      "crypto",
      "appgroup",
      "dynamic-island",
    ],
    link: "",
    description: "SwiftUI app to track live crypto activities.",
    isComingSoon: true,
  },
  {
    title: "Tennis score counter",
    techs: ["swiftui", "watchos", "health-kit"],
    link: "",
    description:
      "TCA SwiftUI app to count tennis scores and track health data.",
    isComingSoon: true,
  },
  {
    title: "Email validation macro",
    techs: ["swift-macro", "swift", "spm"],
    link: "https://github.com/josetorronteras/EmailValidationMacro",
    description: "Swift macro framework for validating email addresses.",
  },
  {
    title: "Music genre classification",
    techs: ["python", "deep learning", "keras", "gtzan", "tensorflow"],
    description: "Deep learning model to classify music genres.",
    link: "https://github.com/josetorronteras/Music-Genre-Classification",
  },
  {
    title: "CIFAR10 vision classifier",
    techs: ["swift", "python", "mlmodel", "vision"],
    description: "CoreML model to classify CIFAR10 images.",
    link: "https://github.com/josetorronteras/CIFAR10VisionClassifier",
  },
  {
    title: "Monkey species classification",
    techs: ["python", "deep-learning", "keras"],
    description: "Deep learning model to classify monkey species.",
    link: "https://github.com/josetorronteras/Monkey-Species-Classification",
  },
  {
    title: "Weather app",
    techs: ["swift", "ios", "mvvm"],
    description:
      "Simple weather app to check the current weather and forecast.",
    link: "https://github.com/josetorronteras/WeatherApp",
  },
];
