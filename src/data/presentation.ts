type Social = {
  icon: string;
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile: string;
};

const presentation: Presentation = {
  mail: "@gmail.com",
  title: "Hi, I’m Jose Torronteras 👋",
  profile: "/profile.webp",
  description:
    "I'm an experienced *iOS developer* with a passion for building beautiful, performant and user-friendly applications. I have a deep understanding of *Swift, Objective-C, SwiftUI, UIKit, Core Data*, and other technologies required for iOS app development.",
  socials: [
    {
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32a10.49 10.49 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"/></svg>
      `,
      label: "Github",
      link: "https://github.com/josetorronteras",
    },
    {
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.452 20.45h-3.56v-5.57c0-1.328-.022-3.036-1.85-3.036c-1.851 0-2.134 1.447-2.134 2.942v5.664H9.352V8.997h3.413v1.566h.049c.475-.9 1.636-1.85 3.367-1.85c3.605 0 4.27 2.371 4.27 5.456v6.281ZM5.339 7.433a2.063 2.063 0 1 1 0-4.13a2.065 2.065 0 0 1 0 4.13ZM7.12 20.45H3.558V8.997H7.12V20.45ZM23 0H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1Z"/></svg>
      `,
      label: "Linkedin",
      link: "https://linkedin.com/in/jose-torronteras",
    },
  ],
};

export default presentation;
