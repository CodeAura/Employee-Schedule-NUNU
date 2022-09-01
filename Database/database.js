const { 
    createPool
    } = require("mysql");
    
    const pool = createPool({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'nunu_login',
        connectionLimit: 10
    })
    
con = db.connect(host, user, password, database)


document.getElementById("btn").onclick = function() {CheckUser()};

function CheckUser() {
var name = document.getElementById("username").value;
var pass = document.getElementById("password").value;


query = pool.query(`SELECT * FROM users`)
result = query(con, query)

while(row= db.fetch(result)) {
    if(row["username"] == name && row["password"] == pass) {
        alert("U bent ingelogd")
        window.location.href("/calender.html")
        exit();
    }else{
        alert("U zit niet in onze database.")
    }
}
pool.end();
};