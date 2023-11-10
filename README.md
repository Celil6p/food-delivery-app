# Food Delivery App

he Food Delivery App is an innovative solution designed to provide users with a convenient and fast way to order food from their favorite restaurants. With a focus on a seamless user experience, the app showcases a modern design, intuitive navigation, and a range of features to make food ordering a breeze.

![Dashboard Screenshot](/public/dashboard-screenshot.png)

This project is built using [Next.js 14](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), chosen for its cutting-edge features and capabilities. Next.js offers improved performance with its Rust compiler, enhanced image optimization, and Incremental Static Regeneration (ISR), which contributes to an excellent developer experience and a high-performing application.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Development](#local-development)
  - [Accessing the Application Online](#accessing-the-application-online)
  - [Implemented Pages](#implemented-pages)
- [File Structure Overview](#file-structure-overview)
  - [Why Parentheses in Filenames?](#why-Parentheses-in-filenames?)
  - [Login Directory](#login-directory)
  - [Main Directory](#main-directory)
  - [Navigation Directory](#navigation-directory)
  - [Global Assets](#global-assets)
- [Routing](#routing)
- [Components](#components)
- [Styles](#styles)
- [Conclusion](#conclusion)


## Getting Started
### Prerequisites

Ensure you have the following installed:

- Node.js 20.x or later
- PNPM package manager

### Local Development

Follow these steps to set up the project on your local machine for development:

1. **Clone the repository:**

```bash
   git clone https://github.com/celil6p/food-delivery-app.git
```

2. **Navigate to the project directory:**

```bash
    cd food-delivery-app
```
3. **Install the dependencies:**

```bash
    pnpm install
```
4. **Start the development server:**

```bash
    pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) with your browser to view the application

### Accessing the Application Online

The app is deployed and accessible at [here](https://food-delivery-app-omega.vercel.app/).

### Implemented Pages

The application includes the following pages, created based on the provided Figma designs:

- **Homepage (`"/"`):** The main landing page of the app.
- **Login (`"/login"`):** The login page for user authentication.
- **Settings (`"/settings"`):** The primary settings page with various configuration options.
- **Account Settings (`"/settings/account"`):** The user account settings page.

## File Structure Overview

The project is organized into distinct directories:

- `app/(login)`: Login functionality related files.
- `app/(main)`: Main interface components and pages.
- `app/(navigation)`: Navigation components like the navbar and hamburger menu.

Each directory includes a `layout.tsx` for defining the layout of that section.

### Why Parentheses in Filenames?

In our file structure, parentheses indicate optional or dynamic route segments. This is a Next.js App Router convention where:

- `page.js` files define publicly accessible routes.
- `layout.js` files define layouts that are shared between multiple pages.

Related documentation is [here](https://nextjs.org/docs/app/building-your-application/routing/route-groups).

For example, `(login)` in our directory signifies an optional segment for the login route.

### Login Directory

- `layout.tsx`: Layout for the login section.
- `login/LoginForm/FormButton.tsx`: Reusable form submission button.
- `login/LoginForm/LoginForm.tsx`: Main login form component.
- `login/LoginHero/LoginHero.module.css`: Styling for the login hero component.
- `login/LoginHero/LoginHero.tsx`: Visual element for the login page.
- `login/LoginHero/overrides.css`: Overrides for specific styles.
- `login/page.tsx`: Renders the complete login page.

### Main Directory

- `CategoryButton.tsx`: Displays categories.
- `MainLayout.tsx`: Wraps the main content.
- `PromotionCard.tsx`: Displays promotions.
- `RestaurantCard.tsx`: Represents restaurants.
- `layout.tsx`: Layout for main content pages.
- `page.tsx`: Main content entry point (Other pages are not ready yet since only the main page given in the figma file).
- `settings/SettingItem.tsx`: Individual setting item.
- `settings/Settings.tsx`: Main settings component.
- `settings/account/page.tsx`: Account settings (Other settings pages are not ready yet since only the account given in the figma file).
- `settings/layout.tsx`: Layout for settings.
- `settings/page.tsx`: User settings main page.

### Navigation Directory

- `HamburgerMenu.tsx`: Mobile menu component.
- `Navbar.tsx`: Application navigation bar.

### Global Assets

- `favicon.ico`: Website favicon.
- `globals.css`: Global application styles.

## Routing

Routes are managed within the `app` directory. Each `page.tsx` corresponds to a specific route, containing component definitions, data-fetching methods, and layouts.

## Components

Reusable pieces of the application, located in their respective directories and imported as needed. For instance, `LoginForm.tsx` and `Settings.tsx` are included within `login/page.tsx` to render the form and `home/settings/page.tsx` to render user settings.

## Styles

The project uses TailwindCSS for styling, utilizing CSS modules for component-scoped styles and a global CSS file for universal styles.
Only raw CSS used in `/login/LoginHero/LoginHero.tsx` to override custom styling to react-slick slider package.

## Conclusion

The application follows best practices in organization, modularity, and styling, using Next.js 14's App Router for dynamic routing and enhancing maintainability.