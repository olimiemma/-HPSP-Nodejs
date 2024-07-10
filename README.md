# MoodRater

MoodRater is a web application built with Next.js and React that allows users to assess their mood and receive personalized encouragement and activity suggestions based on their current emotional state.

## Features

- User-friendly interface for mood assessment
- Personalized mood messages based on user input
- Activity suggestions tailored to the user's mood
- Responsive design using Tailwind CSS

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Radix UI Primitives

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mood-rater.git
   ```

2. Navigate to the project directory:
   ```
   cd mood-rater
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
mood-rater/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── MoodRater.js
│   └── ui/
│       ├── card.js
│       ├── label.js
│       ├── input.js
│       ├── slider.js
│       └── button.js
├── public/
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

## Customization

You can customize the mood messages and activity suggestions by modifying the `getMoodMessage` and `getActivitySuggestions` functions in the `components/MoodRater.js` file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

## Contact

If you have any questions, feel free to reach out to https://www.linkedin.com/in/olimiemma/
