var expect = require("chai").expect;
var mocha = require("mocha");
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);

	describe("simple test", function(){

		it("adds two numbers", function(){

			var result = 2 + 2;
			expect(result).to.equal(4);
		});

	})

	describe("test on spy", ()=>{
		it("for each", () => {
			const array = [1,2,3];
			const runlog = () => console.log("running")
			const spy = chai.spy(runlog);
			array.forEach(spy);
			expect(spy).to.have.been.called(array.length);
		})
	})


	describe("async", () => {
		it("test case", (done) => {
			console.log("Waiting 1 second")
			setTimeout(()=>{
				console.log("waiting over (this is async)")
				done()
			}, 1000);
		})
	})