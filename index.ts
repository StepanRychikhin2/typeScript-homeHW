// class Zhiguli_8 {
//     private needRepair = false;
//     private maxEngineLoad = 3;

//     /**
//      * Заводить двигун машини, якщо це можливо
//      */
//     private checkEngine () {
//       // Перевіряємо, чи не зламаний двигун
//       if (this.needRepair) {
//         throw new Error('Engine not work');
//       }

//       // Пробуємо його завести
//       const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
//       if (this.maxEngineLoad === engineLoad) {
//         this.needRepair = true;
//         throw new Error('Engine broken again');
//       }
//     }

//     /**
//      * Завести двигун
//      */
//     public startEngine () {
//       this.checkEngine();

//       console.log('Ta-ta-ta-ta');
//     }

//     /**
//      * Ремонт двигуна
//      */
//     public repairEngine () {
//       this.needRepair = false;

//       console.log('Engine rebuilt');
//     }
//    }

//    const auto = new Zhiguli_8();

//    try {
//     auto.startEngine();
//     auto.startEngine();
//     auto.startEngine();
//     auto.startEngine();
//    } catch (e) {
//     console.log(e);
//     auto.repairEngine();
//     auto.startEngine();
//    }

abstract class House {
	public abstract door: Boolean
	public abstract key: string | number 

	  constructor(key: Key) {
	    this.key = key;
	}

}

class Porson extends House {
	public door: Boolean = false
	public key: string | number = 'awdasd'

	constructor(door: Boolean, key: string | number) {
		super()
		this.door = door
		this.key = key
		console.log(`door${door} , key${key}`)
	}
}

console.log(House)
console.log(new Porson(false, 'keyawd'))
