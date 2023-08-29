function validateInfo() {
    var usr = document.querySelector('#usrname').value;
    var crd = document.querySelector('#card').value;
    var month = document.querySelector('#expdateA').value;
    var year = document.querySelector('#expdateB').value;
    var cvc = document.querySelector('#cvc').value;

    if (usr != '') {
        const pat = /[0-9]|[!@#$%^&*()_+~]/;
        if (pat.test(usr)) {
            document.querySelector("label[for='usrname']").style.color = "hsl(0, 100%, 66%)";
            document.querySelector("label[for='usrname'] span").style.display = "inline";
            document.querySelector("label[for='usrname'] span").innerText = ": invalid.";
            document.querySelector('#usrname').style.borderColor = "hsl(0, 100%, 66%)";
            return
        } else {
            document.querySelector("label[for='usrname']").style.color = "hsl(278, 68%, 11%)";
            document.querySelector("label[for='usrname'] span").style.display = "none";
            document.querySelector("label[for='usrname'] span").innerText = ": invalid.";
            document.querySelector('#usrname').style.borderColor = "hsl(270, 3%, 87%)";
        }
    } else {
        document.querySelector("label[for='usrname']").style.color = "hsl(0, 100%, 66%)";
        document.querySelector("label[for='usrname'] span").style.display = "inline";
        document.querySelector("label[for='usrname'] span").innerText = ": required.";
        document.querySelector('#usrname').style.borderColor = "hsl(0, 100%, 66%)";
        return
    }

    if (crd != '') {
        const pat = /[a-zA-Z]|[!@#$%^&*()_+~]/;
        if (pat.test(crd) || crd.length < 16 || crd.length > 16) {
            document.querySelector("label[for='card']").style.color = "hsl(0, 100%, 66%)";
            document.querySelector("label[for='card'] span").style.display = "inline";
            document.querySelector("label[for='card'] span").innerText = ": invalid.";
            document.querySelector('#card').style.borderColor = "hsl(0, 100%, 66%)";
            return
        } else {
            document.querySelector("label[for='card']").style.color = "hsl(278, 68%, 11%)";
            document.querySelector("label[for='card'] span").style.display = "none";
            document.querySelector("label[for='card'] span").innerText = ": invalid.";
            document.querySelector('#card').style.borderColor = "hsl(270, 3%, 87%)";
        }
    } else {
        document.querySelector("label[for='card']").style.color = "hsl(0, 100%, 66%)";
        document.querySelector("label[for='card'] span").style.display = "inline";
        document.querySelector("label[for='card'] span").innerText = ": required.";
        document.querySelector('#card').style.borderColor = "hsl(0, 100%, 66%)";
        return
    }

    const curr_dt = new Date();

    if (year != '') {
        const curr_yy = curr_dt.getFullYear() - 2000;
        if (year < curr_yy || year > 99) {
            document.querySelector("label[for='expdate']").style.color = "hsl(0, 100%, 66%)";
            document.querySelector("label[for='expdate'] span").style.display = "inline";
            if (year > 99) {
                document.querySelector("label[for='expdate'] span").innerText = ": Invalid.";
            } else {
                document.querySelector("label[for='expdate'] span").innerText = ": Expired.";
            }
            document.querySelector('#expdateA').style.borderColor = "hsl(0, 100%, 66%)";
            document.querySelector('#expdateB').style.borderColor = "hsl(0, 100%, 66%)";
            return
        } else {
            document.querySelector("label[for='expdate']").style.color = "hsl(278, 68%, 11%)";
            document.querySelector("label[for='expdate'] span").style.display = "none";
            document.querySelector("label[for='expdate'] span").innerText = ": Expired.";
            document.querySelector('#expdateA').style.borderColor = "hsl(270, 3%, 87%)";
            document.querySelector('#expdateB').style.borderColor = "hsl(270, 3%, 87%)";
        }
    } else {
        document.querySelector("label[for='expdate']").style.color = "hsl(0, 100%, 66%)";
        document.querySelector("label[for='expdate'] span").style.display = "inline";
        document.querySelector("label[for='expdate'] span").innerText = ": required.";
        document.querySelector('#expdateA').style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector('#expdateB').style.borderColor = "hsl(0, 100%, 66%)";
        return
    }

    if (year == 23) {
        if (month != '') {
            const curr_mm = curr_dt.getMonth();
            if (month < curr_mm || month > 12 && year == 23) {
                document.querySelector("label[for='expdate']").style.color = "hsl(0, 100%, 66%)";
                document.querySelector("label[for='expdate'] span").style.display = "inline";
                if (month > 12) {
                    document.querySelector("label[for='expdate'] span").innerText = ": Invalid.";
                } else {
                    document.querySelector("label[for='expdate'] span").innerText = ": Expired.";
                }
                document.querySelector('#expdateA').style.borderColor = "hsl(0, 100%, 66%)";
                document.querySelector('#expdateB').style.borderColor = "hsl(0, 100%, 66%)";
                return
            } else {
                document.querySelector("label[for='expdate']").style.color = "hsl(278, 68%, 11%)";
                document.querySelector("label[for='expdate'] span").style.display = "none";
                document.querySelector("label[for='expdate'] span").innerText = ": Expired.";
                document.querySelector('#expdateA').style.borderColor = "hsl(270, 3%, 87%)";
                document.querySelector('#expdateB').style.borderColor = "hsl(270, 3%, 87%)";
            }
        } else {
            document.querySelector("label[for='expdate']").style.color = "hsl(0, 100%, 66%)";
            document.querySelector("label[for='expdate'] span").style.display = "inline";
            document.querySelector("label[for='expdate'] span").innerText = ": required.";
            document.querySelector('#expdateA').style.borderColor = "hsl(0, 100%, 66%)";
            document.querySelector('#expdateB').style.borderColor = "hsl(0, 100%, 66%)";
            return
        }
    }

    if (cvc != '') {
        const pat = /[a-zA-Z]|[!@#$%^&*()_+~]/;
        if (pat.test(cvc) || cvc < 100 || cvc > 999) {
            document.querySelector("span[for='cvc']").style.color = "hsl(0, 100%, 66%)";
            document.querySelector("span[for='cvc']").style.marginRight = "0";
            document.querySelector("span[for='cvc'] span").innerText = ": invalid.";
            document.querySelector("span[for='cvc'] span").style.display = "inline";
            document.querySelector('#cvc').style.borderColor = "hsl(0, 100%, 66%)";
            return
        } else {
            document.querySelector("span[for='cvc']").style.color = "hsl(278, 68%, 11%)";
            document.querySelector("span[for='cvc'] span").style.display = "none";
            document.querySelector("span[for='cvc'] span").innerText = ": required.";
            document.querySelector('#cvc').style.borderColor = "hsl(270, 3%, 87%)";
            if (window.screen.width > 900) {
                document.querySelector("span[for='cvc']").style.marginRight = "17%";
            } else {
                document.querySelector("span[for='cvc']").style.marginRight = "12";
            }
        }
    } else {
        document.querySelector("span[for='cvc']").style.color = "hsl(0, 100%, 66%)";
        document.querySelector("span[for='cvc']").style.marginRight = "0";
        document.querySelector("span[for='cvc'] span").innerText = ": required.";
        document.querySelector("span[for='cvc'] span").style.display = "inline";
        document.querySelector('#cvc').style.borderColor = "hsl(0, 100%, 66%)";
        return
    }

    completeProcess();
    return;
}

function completeProcess() {
    document.querySelector('.loader').style.display = "block";
    setTimeout(function () {
        document.querySelector('.loader').style.display = "none";
        document.querySelector('.payment-form').style.display = "none";
        document.querySelector('.ty').style.display = "block";
    }, 2000)
}

function enterDetails(id) {
    const val = document.querySelector('#' + id).value;
    if (val == '') { return }
    if (id == 'usrname') {
        document.querySelector('.card-name').innerText = val.toUpperCase();
    }
    if (id == 'card') {
        document.querySelector('.front p').innerText = val.replace(/(.{4})/g, '$1 ');
    }
    if (id == 'expdateA') {
        document.querySelector('.mm').innerText = val;
    }
    if (id == 'expdateB') {
        document.querySelector('.yy').innerText = val;
    }
    if (id == 'cvc') {
        document.querySelector('.cvc-num').innerText = val;
    }
}

function reset() {
    location.reload();
}