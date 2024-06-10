import Link from "next/link"

export default function Info() {
    return (
        <main className="flex flex-col items-center justify-center max-w-3xl mx-auto p-10 sm:p-4">

            <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <h2 className="text-4xl font-light">Info</h2>
            <p className="font-light">Creating secure passwords is crucial for protecting your personal and sensitive information. Here are some guidelines and tips to help you create strong and secure passwords:</p>
            </div>

            
            

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mt-10">
                <div className="col-span-2 sm:col-span-1 p-4 border rounded-lg bg-indigo-500 hover:scale-110 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2">
                    <span className="font-semibold">
                        Length
                    </span>
                    <li>Longer is better: Aim for at least 12-16 characters. Longer passwords are generally more secure.</li>
                </div>

                <div className="p-4 border rounded-lg bg-green-500 hover:scale-110 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 col-span-2">
                    <span className="font-semibold">
                        Complexity
                    </span>
                    <li>Mix of character types: Use a combination of uppercase letters, lowercase letters, numbers, and special characters (e.g., @, #, $, %, &, etc.).</li>
                    <li>Avoid predictable patterns: Don't use common substitutions (e.g., "P@ssw0rd"), sequences (e.g., "123456"), or repeated characters.</li>
                </div>

                <div className="p-4 border rounded-lg bg-yellow-500 hover:scale-110 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 col-span-2">
                    <span className="font-semibold">
                        Unpredictability
                    </span>
                    <li>Randomness is key: Use a password generator to create truly random passwords.</li>
                    <li>Avoid dictionary words: Single dictionary words are easily cracked by brute-force attacks.</li>
                </div>

                <div className="p-4 border rounded-lg bg-red-500 hover:scale-110 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 sm:col-span-1 col-span-2">
                    <span className="font-semibold">
                    Uniqueness
                    </span>
                    <li>Different for each account: Use a unique password for every account to prevent a breach on one site from compromising others.</li>
                </div>

                <div className="p-4 border rounded-lg bg-slate-300 hover:scale-110 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 sm:col-span-1 col-span-2">
                    <span className="font-semibold">
                    Password Managers
                    </span>
                    <li>Use a password manager: Tools like LastPass, 1Password, or Bitwarden can generate, store, and manage your passwords securely. This way, you only need to remember one master password.</li>
                </div>

                <div className="p-4 border rounded-lg bg-purple-500 hover:scale-110 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 sm:col-span-1 col-span-2">
                    <span className="font-semibold">
                    Regular Updates
                    </span>
                    <li>Change passwords regularly: Especially if you suspect an account has been compromised.</li>
                    <li>Monitor for breaches: Use services like Have I Been Pwned to check if your email or password has been involved in a data breach.</li>
                </div>

                <div className="p-4 border rounded-lg bg-pink-500 hover:scale-110 hover:shadow-lg duration-300 bg-opacity-40 flex flex-col gap-2 sm:col-span-1 col-span-2">
                    <span className="font-semibold">
                    Multi-Factor Authentication (MFA)
                    </span>
                    <li>Use a password manager: Tools like LastPass, 1Password, or Bitwarden can generate, store, and manage your passwords securely. This way, you only need to remember one master password.</li>
                </div>
            </div>

            <Link className="mt-10 mr-auto bg-blue-500 hover:opacity-50 duration-400 px-4 py-2 text-white rounded" href="/">&larr; Back</Link>

            
        </main>
    )
}