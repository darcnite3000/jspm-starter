import {logme} from './other';

@logme
class Foo{
	constructor(){
		this.baz = "foo";
	}
	@logme
	blab(){
		console.log(this.baz);
	}
}

let foo = new Foo;
foo.blab();