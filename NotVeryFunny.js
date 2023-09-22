function openNew() {
    window.open("SoNotFunny.html");
}

while(true) {
    openNew();
    await new Promise(resolve => setTimeout(resolve, 1000));
    openNew();
}
