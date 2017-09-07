import passportJwt from 'passport-jwt';
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
import { getUserById } from '../db/controllers/user';
import { dbconfig } from '../db/config';


export function initPassport (passport){
    let opts = {};
    opts.jwtFromRequest =  ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = dbconfig.jwtSecret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

        getUserById(jwt_payload.id, (err, user) => {
            if(err){
                return done(err, false);
            }
            
            if(user){
                return done(null, user);
            }else{
                return done(null, false);
            }
        });
    }));
} 