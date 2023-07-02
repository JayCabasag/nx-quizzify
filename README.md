# Quizzify

Welcome to Quizzify! This is a monorepo for an online quizzing app that consists of two applications: Quizzify Server and Quizzify Client. Quizzify is built using Nx, a powerful extensible dev tools for monorepos.

## Quizzify Server

The Quizzify Server is the backend application for the Quizzify platform. It is built using NestJS, a progressive Node.js framework, and utilizes MongoDB for data storage. The server handles authentication, manages quizzes, questions, and user responses, and provides the necessary APIs for the Quizzify Client to interact with. The server code resides in the `quizzify-server` directory.

## Quizzify Client

The Quizzify Client is the frontend application for the Quizzify platform. It is built using Angular, a popular TypeScript-based web application framework. The client provides a user-friendly interface for users to browse quizzes, take quizzes, and view their quiz history. The client code resides in the `quizzify-client` directory.

## Getting Started

To get started with Quizzify, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/quizzify.git`
2. Install the dependencies: `cd quizzify && npm install`
3. Start the Quizzify Server: `nx serve quizzify-server`
4. Start the Quizzify Client: `nx serve quizzify-client`

Now you should have both the server and client applications up and running locally. You can access the Quizzify Client by visiting `http://localhost:4200` in your browser.

## Contributing

We welcome contributions to Quizzify! If you want to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Open a pull request against the main repository.

Please make sure to follow our [code of conduct](CODE_OF_CONDUCT.md) and [contribution guidelines](CONTRIBUTING.md) when contributing to Quizzify.

## License

Quizzify is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as permitted by the license.

## Acknowledgements

We would like to thank the following open-source projects and libraries that made Quizzify possible:

- [Nx](https://nx.dev)
- [NestJS](https://nestjs.com)
- [MongoDB](https://www.mongodb.com)
- [Angular](https://angular.io)

## Contact

If you have any questions or suggestions regarding Quizzify, please feel free to reach out to us at [jaycabasag1999@gmail.com](mailto:jaycabasag1999@gmail.com).

Thank you for using Quizzify! Enjoy quizzing!
