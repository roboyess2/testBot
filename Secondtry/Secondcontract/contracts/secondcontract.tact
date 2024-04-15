import "@stdlib/deploy";

message Amnt {
    amount: Int as uint32;
}

contract Secondcontract with Deployable {
    
    id: Int as uint32;
    sum: Int as uint32;
    
    init(id: Int) {
        self.id = id;
        self.sum = 0;
    }

    receive("increment"){
        self.sum = self.sum + 1;
    }

    receive(msg: Amnt) {
        self.sum = self.sum + msg.amount;
    }

    get fun sum(): Int {
        return self.sum; 
    }

    get fun id(): Int {
        return self.id;
    }
}
