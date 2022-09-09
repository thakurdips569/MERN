class laptop
{
  constructor(ram,cpu,hdd){
    this.ram
    this.cpu
    this.hdd
  }
  turnOn = () =>{
    console.log('laptop turns on');
  }
  getcpu = () =>{
    console.log('cpu is '+this.cpu);
  }
}
let lappy  = new laptop(3,500,'i9');
lappy.turnOn();