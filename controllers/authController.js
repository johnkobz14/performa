const passport = require("passport");
const MicrosoftStrategy = require("passport-microsoft").Strategy;

//Microsoft
passport.use(
  new MicrosoftStrategy(
    {
      clientID: "adf6816f-6c46-451e-b9d0-2f43a7b434ff",
      clientSecret: "4z_4n_1_kV3UdlcAKztzi17BgcouZc-96_",
      callbackURL: "http://localhost:3000/dashboard",
      scope: ["user.read"],
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        console.log(profile.id);
        return done(err, user);
      });
    }
  )
);

// exports.getAuth = async (req, res, next) => {
//   passport.authenticate("microsoft");
// };

// exports.getRedirect = async (req, res, next) => {
//   passport.authenticate("microsoft", { failureRedirect: "/" }),
//     function (req, res) {
//       // Successful authentication, redirect home.
//       res.redirect("/dashboard");
//     };
// };

app.get("/auth/microsoft", passport.authenticate("microsoft"));

// app.get(
//   "/auth/microsoft/secrets",
//   passport.authenticate("microsoft", { failureRedirect: "/login" }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect("/secrets");
//   }
// );
