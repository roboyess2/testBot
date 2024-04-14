import "@stdlib/deploy";

contract Firstcontract with Deployable {
    
    counter: Int as uint32;

    init() {
        self.counter = 0 ;
    }

    receive("increment"){
        self.counter = self.counter + 1 ;
    }

    get fun counter(): Int {
        return self.counter;
    }
}
