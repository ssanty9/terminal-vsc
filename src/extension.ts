import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.openTerminalVsc', async () => {

		const terminal = vscode.window.createTerminal(`TERMINAL`);
		terminal.show(true);

		const closeListener = vscode.window.onDidCloseTerminal((closedTerminal: any) => {
			if (closedTerminal === terminal) {
				closeListener.dispose();
			}
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }