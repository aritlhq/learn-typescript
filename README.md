# Learn TypeScript

This repository is a personal collection of code examples and tests created while learning TypeScript. It covers a wide
range of features, from fundamental concepts to more advanced topics like Object-Oriented Programming (OOP), Generics,
and schema validation using the Zod library.

## Topics Covered

The examples are organized by topic, with most concepts demonstrated through Jest tests.

### Fundamentals

- **Data Types**: `string`, `number`, `boolean`, `any`, `null`, `undefined`.
- **Structured Types**: `Array` (mutable & readonly), `Tuple`, `Enum`, `Object`.
- **Type Aliases & Interfaces**:
    - Basic declaration and usage.
    - Optional properties (`?`).
    - Indexable interfaces.
    - Extending interfaces.
    - Functions within interfaces.
- **Advanced Types**: `Union` types (`|`), `Intersection` types (`&`).
- **Functions**:
    - Function declarations and return types.
    - Optional and default parameters.
    - Rest parameters.
    - Function overloading.
    - Functions as parameters.
- **Control Flow**: `if` statements, `switch` statements, `for`, `while`, and `do-while` loops.
- **Type Assertion**: Using the `as` keyword.

### Object-Oriented Programming (OOP)

- **Classes & Objects**: Basic structure, properties, and methods.
- **Constructors**: Initializing objects.
- **Inheritance**: `extends` keyword, `super()` constructor, and method overriding.
- **Visibility**: `public`, `protected`, and `private` modifiers.
- **Polymorphism**: Treating objects of different classes through a common interface.
- **Abstract Classes**: Defining base classes that cannot be instantiated.
- **Static Properties & Methods**: Class-level members.
- **Getters & Setters**: Computed properties.
- **`instanceof` Operator**: Type checking at runtime.
- **Namespaces**: Organizing code into logical groups.

### Generics

- **Generic Functions & Classes**: Creating reusable, type-safe components.
- **Generic Constraints**: Limiting the types that can be used with a generic.
- **Multiple Generic Types**: Classes and functions that work with more than one generic type.
- **Default Generic Parameters**: Providing fallback types.
- **Built-in Generics**: `Array`, `Promise`, `Set`, `Map`.

### Validation with Zod

- **Schema Creation**: Defining validation rules for data.
- **Data Type Validation**: Validating strings, numbers, booleans, dates, etc.
- **Object & Collection Validation**: Handling nested objects, arrays, sets, and maps.
- **Error Handling**: Catching and inspecting validation errors from `ZodError`.
- **Customization**:
    - Custom error messages.
    - Data coercion and transformation (`.transform()`, `.coerce`).
    - Optional properties and custom validation logic.

## Tech Stack

- **[TypeScript](https://www.typescriptlang.org/)**: The core language for static typing.
- **[Jest](https://jestjs.io/)**: A delightful JavaScript testing framework used to verify the examples.
- **[Babel](https://babeljs.io/)**: The compiler used to transpile TypeScript for Jest.
- **[Zod](https://zod.dev/)**: A TypeScript-first schema declaration and validation library.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system (which includes `npm`).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aritlhq/learn-typescript.git
   ```
2. Navigate to the project directory:
   ```bash
   cd learn-typescript
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Running the Tests

This project uses Jest to run tests that demonstrate and validate each TypeScript concept.

To execute all tests, run the following command in your terminal:

```bash
npm test
```
