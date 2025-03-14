# 🌿 Eco Pakalpojumi - Jaunumi un Atjauninājumi  

## **🆕 Kas jauns projektā?**  
Šajā atjauninājumā ir pievienotas vairākas jaunas funkcijas un uzlabojumi, kas padara lietotāja pieredzi ērtāku un efektīvāku.  

---

## **💰 Stripe maksājumu sistēmas integrācija**  
✅ **Tagad iespējams veikt reālus maksājumus** ar kredītkarti, izmantojot **Stripe Checkout**.  
✅ **Testa un Live režīma atbalsts** – iespējams pārslēgties starp testa un īstajiem darījumiem.  
✅ **Dinamiska Checkout lapa** – lietotājs var izvēlēties maksājuma metodi (Stripe / PayPal).  

---

## **🛒 Groza un Checkout uzlabojumi**  
✅ **Preces tagad pareizi tiek pievienotas grozam** pēc “Buy Now” pogas nospiešanas.  
✅ **Grozs saglabājas lokālajā atmiņā** – lietotājs nezaudē preces pēc lapas pārlādes.  
✅ **Grozs aprēķina kopējo summu un attēlo preču daudzumu** uzreiz.  
✅ **Checkout lapa tagad pieņem maksājuma datus** un apstrādā pasūtījumu.  
✅ **Pasūtījuma apstiprinājuma lapa** – pēc veiksmīga pirkuma tiek parādīts apstiprinājuma ziņojums.  

---

## **🎨 Dizaina un UI uzlabojumi**  
✅ **Navbar (galvenā izvēlne) ir fiksēta un pareizi pozicionēta.**  
✅ **Hamburger izvēlne tagad darbojas pareizi mobilajās ierīcēs.**  
✅ **Grozs un tā preču skaits tagad tiek pareizi attēlots visos ekrāna izmēros.**  
✅ **Produktu kartiņas uzlabotas ar labāku animāciju un hover efektu.**  
✅ **Checkout forma vizuāli uzlabota ar labāku lietotāja pieredzi.**  

---

## **📨 E-pastu sistēma**  
✅ **Lietotājs pēc pirkuma saņem apstiprinājuma e-pastu.**  
✅ **Tagad e-pasta paziņojumi tiek nosūtīti uz pareizo adresi, nevis uz fiksētu e-pastu.**  
✅ **E-pasta ziņojumi personalizēti ar klienta vārdu un pirkuma informāciju.**  

---

## **⚡ Kā izmantot Stripe maksājumus?**  
1️⃣ **Ievadiet savus Stripe API atslēgas (`pk_live_...` un `sk_live_...`).**  
2️⃣ **Pārliecinieties, ka serveris ir palaists:**  
   ```sh
   node server.js
