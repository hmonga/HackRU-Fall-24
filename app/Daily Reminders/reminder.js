const express = require('express');
const bodyParser = require('body-parser');
const schedule = require('node-schedule');

const app = express();  // create an express app
app.use(bodyParser.json());  // use the body-parser middleware

let reminders = [];  // store reminders in memory

app.post('/reminders', (req, res) => {
    const { message, time } = req.body;
    const reminder = { message, time };
    reminders.push(reminder);   // add the reminder to the list

    schedule.scheduleJob(time, () => { 
        console.log(`Reminder:  ${message}`);
    });

    res.status(201).send(reminder);
});

//Get all reminders 
app.get('/reminders', (req, res) => {
    res.send(reminders);
});

app.put('/reminders/:id', (req, res) => {
    const { id } = req.params;
    const { message, time } = req.body;
    const reminder = reminders.find(r => r.id === id);

    if(reminder){
        reminder.message = message;
        reminder.time = time;
        
        schedule.scheduleJob(time, () => {
            console.log(`Reminder: ${message}`);
        });
        res.send(reminder);
    }else{
        res.status(404).send({error : 'Reminder not found'});   
    }
});

app.delete('/reminders/:id', (req, res) => {
    const{id} = req.params;
    reminders = reminders.filter(r => r.id !== id);
    res.status(204).send();
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   
})