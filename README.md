
<a href="[https://clumsy-keys.vercel.app/](https://techmate.vercel.app/)">
    <h1>Techmate-A social Media Application for Engineers</h1>
</a>
<p >
  Techmate is a social media application to connect the potential job seeker with the organization and to stay up to date with latest events
</p>

## Description

Techmate is an interactive mobile first web Application that helps to connect the job seeker with potential Employers and to stay upto date with current tech events. The web-app leverages the high performant capabilities of the [Vite]([https://svelte.dev/](https://vitejs.dev/)) to provide a smooth and responsive experience. The project is implemented in a [TypeScript](https://www.typescriptlang.org/) environment and hosted on [Vercel](https://vercel.com).




https://github.com/Ajitesh72/techmate/assets/95878363/d97e7950-1f84-4073-80ca-700e6104d0d6


To view a detailed video-https://www.youtube.com/watch?v=06F4EC4F5ws

## Features

- [Firebase-Admin SDK](https://github.com/firebase/firebase-admin-node) for the Backend Services.
- [my.locationiq](https://locationiq.com/docs)for generation user current location
- Flask is used as the server for hosting the deep learning algorithm(Post Summarization Model)

(Soon to be added 😊)
- [Redis as Caching Database](https://supabase.com/docs/guides/auth),
- [Realtime Chating Feature],
- [StripeJS](https://stripe.com/docs/js) for payment processing for buying Premium.

## Key Functionality
- Realtime Events Updation.
- Ability to connect Employees to potential Employers based on location.
- Easy to use Interface to stay upto date with current Technology and Tech events.
- Email Verification using firebase client-sdk to allow only genuine users.
- Realtime Chatting with potential employers[Currently working on it].
- Premium Subscription using Stripe.js which unlocks the feature to view skipped profiles and chat with potential Employers.
- Post/Events Summarization using transformers model from Hugging-Face

## Running locally

You will need to have the necessary environment variables setup in your `.env` file.
This include keys for your my.locationiq, and Stripe account, Firebase-admin and Firebase-Client Sdk. 
    
```bash
HOST =
FIREBASE_APIKEY =
DB_USERNAME
FIREBASE_ADMINKEY =
FIREBASE_CLIENTKEY =
STRIPE_PUBLISHABLE_KEY =
STRIPE_WEBHOOK_KEY =
STRIPE_SECRET_KEY =
my.locationiq_APIKEY =
```

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your authentication provider accounts.

1. Install run: `npm i`
2. Make a new `.env` file.
3. Populate the `.env` file with the necessary environment variables.

```bash
npm run dev
```

Your app template should now be running on [localhost:5173](http://localhost:5173/).




