import * as monaco from 'monaco-editor';

class MonacoService {
    constructor() {
        this.editor = null;
    }

    inject(injectionDiv) {
        this.editor = monaco.editor.create(injectionDiv, {
            value: "",
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            theme: 'vs',
            language: 'python',
            automaticLayout: true,
        });
    }
}

export const monacoService = new MonacoService();