var mocha = require("mocha");
var chai = require('chai');
var expect = require("chai").expect;
var spies = require('chai-spies');
chai.use(require('chai-things'));
var user = require('../app/models/user.model.js');
chai.use(spies);



console.log(user)


// describe("User model", () => {
// 	before((done) =>{
// 		return user.User.sync({force: true})
// 		.then(()=>{
// 			return user.User.sync({force:true})
// 		})
// 		.then(()=>{
// 			done();
// 		})
// 		})
// 	})

//   var user1;
//    beforeEach(function () {//runs once before EACH IT BLOCK, doesnt matter where the describe is (if lodged btween ifs)
//    user1 = user.UserSchema.build({ //does not return promise-not async/does not interact with database 
//     email: "sck324@nyu.edu",
//     name: "Sejipoo"
 
//    })
// })

// describe('route', function () {
// 	it('returns the url', function(){
        
//      expect(user1.route).to.equal(user1.urlTitle); 
      
//       });
//     });

// // describe("error from no name", () => {
// // 	it("must have a non-null name", () =>{
// // 		expect(user.User.create({
// // 			email: "sej@gmail.com"
// // 		})).to.throw(Error)
// // 	})
// // })

//     it('errors without content', function () {
//       var page = user.User.build({});
//       return page
//       .validate()
//       .then(function (err) {
//         expect(err).to.exist;
//         expect(err.errors).to.contain.a.thing.with.property('path', 'email');
//       });
//     });
