export type Project = {
  title: string;
  techs: string[];
  link: string;
  description: string;
  isComingSoon?: boolean;
};

export const projects: Project[] = [
  {
    title: "Tennis Score Counter",
    techs: ["swiftui", "watchos", "health-kit"],
    link: "https://github.com/josetorronteras/",
    description: "TCA SwiftUI app to count tennis scores and track health data.",
    isComingSoon: true,
  },
  {
    title: "EmailValidationMacro",
    techs: ["swift-macro", "swift", "spm"],
    link: "https://github.com/josetorronteras/",
    description: "Swift macro framework for validating email addresses.",
    isComingSoon: true,
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
    title: "WeatherApp",
    techs: ["swift", "ios", "mvvm"],
    description: "Simple weather app to check the current weather and forecast.",
    link: "https://github.com/josetorronteras/WeatherApp",
  },
];
