import "@stdlib/deploy";


contract Counter {
    a: Int as uint32;

    init() {
        self.a = 0;
    }

    receive("increment") {
        self.a = self.a +1;
    }

    get fun value(): Int {
        return self.a;
    }

    get fun result(): Int {
        return self.a;
    }

}