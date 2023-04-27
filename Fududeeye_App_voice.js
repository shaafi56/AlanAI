// {Name: Basic_example_for_voice_AI_assistant}
// {Description: Learn how to create a dialog script and integrate your AI assistant with the app}

// Use this sample to create your own voice commands
const phoneNumber = "\\d{3}-\\d{3}-\\d{4}$"
intent('phone is $(Phone* ${phoneNumber})', p => {
    p.play({command: "getphone", text: p.PHONE.value});
    p.play('phone number is ${p.PHONE.value}');
});

intent("money is $(MONEY)", p=>{
    p.play({command: "getmoney", text:p.MONEY.value});
    p.play('amount money is $${p.MONEY.value}');
});

intent("send",p => {
    p.play({command: "forward"});
    p.play('checking the phone number and amount money');
});

//current last acction with transfared money 
intent('last action',p =>{
    p.play({command: "lastaction"});
});

//diologBox that checking phone number and current money
intent("yes",p=>{
    p.play({command: "forward"});
    p.play("sending the money")
});

