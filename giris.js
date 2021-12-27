 //var kullanicilar = [{ email: "ozcaydevrim3@gmail.com", kullaniciadi: "Devrim", parola: "12345" }, { email: "mehmetalpkaya@gmail.com", kullaniciadi: "Mehmet", parola: "54321" }, { email: "ercanuca@gmail.com", kullaniciadi: "Ercan", parola: "98765" }];

 var kullaniciadi = prompt("lütfen siteye gireceğinizi Kullanıcı adı veya E mail giriniz");
 var parola = prompt("şifre giriniz");

 var girilenKullaniciAdi;
 var girilenParola;
 var girilenEmail;
 var x;

 function KontrolEt() {
     girilenEmail = document.getElementById("giriskullanici").value;
     girilenKullaniciAdi = document.getElementById("giriskullanici").value;
     girilenParola = document.getElementById("girisparola").value;
     //for (x of kullanicilar) {
     if (((kullaniciadi == girilenKullaniciAdi) || (x.email == girilenEmail)) && (parola == girilenParola)) {
         girilenKullaniciAdi = kullaniciadi;
         girilenParola = parola;
         return true;
     } else {
         return false;
     }


     // }

 }

 function GirisOnayi() {
     KontrolEt();
     if (KontrolEt()) {
         window.open("website.html", "_self");
     } else {
         alert("Hatalı Kullanıcı Adı veya Parola");
     }
 }