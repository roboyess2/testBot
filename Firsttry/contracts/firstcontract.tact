import "@stdlib/deploy";

message Add {
    amount: Int as uint32;
}

contract Firstcontract with Deployable {
    
    counter: Int as uint32;
    id: Int as uint32;

    init(id: Int) {
        self.counter = 0 ;
        self.id = id;
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

    get fun id(): Int{
        return self.id;
    }
}
