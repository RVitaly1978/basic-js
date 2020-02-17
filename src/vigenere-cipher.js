class VigenereCipheringMachine {
    constructor(isDirectTypeMachine) {
        this.isDirectType = this.validateType(isDirectTypeMachine);

        this.startLetter = 'A';
        this.endLetter = 'Z';
        this.startLetterCode = this.startLetter.charCodeAt(0);
        this.endLetterCode = this.endLetter.charCodeAt(0);
    }

    encrypt(message, key) {
        this.isValidArgs(arguments);

        this.getEncryptLetter = this.getEncryptLetter.bind(this);

        return this.doEncryptDecrypt(message, key, this.getEncryptLetter);
    }
    
    decrypt(encryptedMessage, key) {
        this.isValidArgs(arguments);

        this.getDecryptLetter = this.getDecryptLetter.bind(this);

        return this.doEncryptDecrypt(encryptedMessage, key, this.getDecryptLetter);
    }

    doEncryptDecrypt(str, keyStr, encryptedFunction) {
        const keyLength = keyStr.length;

        const messageInUpperCase = str.toUpperCase();
        const charArr = messageInUpperCase.split('');
        const modifiedCharArr = [];
        let charIndex = 0;

        charArr.forEach(elem => {
            let modifiedChar = elem;

            if (this.isLetter(elem)) {
                const keyIndex = this.getKeyIndex(charIndex, keyLength);
                const charOffset = this.getOffset(keyStr[keyIndex]);

                modifiedChar = encryptedFunction(elem, charOffset);

                charIndex += 1;
            }

            modifiedCharArr.push(modifiedChar);
        });

        if (!this.isDirectType) {
            modifiedCharArr.reverse(); 
        }

        return modifiedCharArr.join('');
    }

    isValidArgs(args) {
        if ((args.length < 2)
            || (args[0] === undefined)
            || (args[1] === undefined)) {
            throw new Error();
        }
    }

    validateType(isTrue) {
        if (isTrue === undefined) return true;

        return isTrue;
    }

    getOffset(letter) {
        const inUpperCase = letter.toUpperCase();
        const offset = inUpperCase.charCodeAt(0) - this.startLetterCode;

        return offset;
    }

    getEncryptLetter(letter, offset) {
        const baseCode = letter.charCodeAt(0);

        let encryptCode = (baseCode + offset);

        if (encryptCode > this.endLetterCode) {
            encryptCode = (encryptCode - this.endLetterCode) + this.startLetterCode - 1;
        }

        return String.fromCharCode(encryptCode);
    }

    getDecryptLetter(letter, offset) {
        const baseCode = letter.charCodeAt(0);

        let encryptCode = (baseCode - offset);

        if (encryptCode < this.startLetterCode) {
            encryptCode = this.endLetterCode - (this.startLetterCode - encryptCode) + 1;
        }

        return String.fromCharCode(encryptCode);
    }

    getKeyIndex(index, length) {
        if (length === 1) return 0;

        if (index < length) return index;

        const rest = (index + 1) % length;

        if (rest === 0) return (length - 1);

        return (rest - 1);
    }

    isLetter(char) {
        const charCode = char.charCodeAt(0);

        if ((charCode < this.startLetterCode)
            || (charCode > this.endLetterCode)) {
            return false;
        }

        return true;
    }
}

module.exports = VigenereCipheringMachine;
