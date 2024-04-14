import "@stdlib/deploy";

message Add {
    amount: Int as uint32;
}

contract Firstcontract with Deployable {
    
    counter: Int as uint32;

    init() {
        self.counter = 0 ;
    }

    receive("increment"){
        self.counter = self.counter + 1 ;
    }
    
    receive(msg: Add){
        self.counter = self.counter + msg.amount;
    }

    get fun counter(): Int {
        return self.counter;
    }
}
