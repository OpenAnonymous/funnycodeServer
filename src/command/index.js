const log = async () => {
    const message = `
    ███╗   ██╗ ██████╗ ██████╗ ███████╗     ██╗███████╗              ███████╗██╗  ██╗██████╗ ██████╗ ███████╗███████╗███████╗
    ████╗  ██║██╔═══██╗██╔══██╗██╔════╝     ██║██╔════╝              ██╔════╝╚██╗██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝
    ██╔██╗ ██║██║   ██║██║  ██║█████╗       ██║███████╗    █████╗    █████╗   ╚███╔╝ ██████╔╝██████╔╝█████╗  ███████╗███████╗
    ██║╚██╗██║██║   ██║██║  ██║██╔══╝  ██   ██║╚════██║    ╚════╝    ██╔══╝   ██╔██╗ ██╔═══╝ ██╔══██╗██╔══╝  ╚════██║╚════██║
    ██║ ╚████║╚██████╔╝██████╔╝███████╗╚█████╔╝███████║              ███████╗██╔╝ ██╗██║     ██║  ██║███████╗███████║███████║
    ╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚══════╝ ╚════╝ ╚══════╝              ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
                                                                                                                             
    `;
    console.log("\x1b[38;2;102;0;255m" + message + "\x1b[0m");
};

module.exports  = log;