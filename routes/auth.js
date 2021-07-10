const express = require("express");
const router = express.Router();

const session = require("express-session");
const passport = require("passport");
const MicrosoftStrategy = require("passport-microsoft").Strategy;

// const { getAuth, getRedirect } = require("../controllers/authController");

const app = express();

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

//Microsoft
passport.use(
  new MicrosoftStrategy(
    {
      clientID: "f4162640-8b7a-46b6-a0e8-839b042ebc8f",
      clientSecret: "O8_e6-fpVS~TZAgvhT03No.k3kST.Q_i15",
      callbackURL: "http://localhost:3000/api/pmp/framework/pillar",
      scope: ["user.read"],
    },
    function (accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        // To keep the example simple, the user's Microsoft Graph profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the Microsoft account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);

router.route("/microsoft").get(passport.authenticate("microsoft"));
// router
//   .route("/dashboard")
//   .get(
//     passport.authenticate("microsoft", { failureRedirect: "/" }),
//     function (req, res) {
//       // Successful authentication, redirect home.
//       res.redirect("/dashboard");
//     }
//   );

module.exports = router;
