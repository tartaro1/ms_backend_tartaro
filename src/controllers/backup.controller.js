import { error, success } from "../message/message.js";
import { BackupsModel } from "../models/backup.js";

/**
 * Controlador para las operaciones relacionadas con los backups
 * @class BackupsController
 */
export class BackupsController {
    /**
     * Obtiene el backup más reciente
     * @param {object} req - Captura peticiones https
     * @param {object} res - Devuelve respuestas https
     * @memberof BackupsController
     */
    static async getLatest(req, res) {
        try {
            const [backup] = await BackupsModel.getLatest();
            res.json(backup);
        } catch (err) {
            error(req, res, 500, "Error getting latest backup");
        }
    }

    /**
     * Crea un nuevo backup
     * @param {object} req - Captura peticiones https
     * @param {object} req.body - Los datos para crear el backup
     * @param {object} res - Devuelve respuestas https
     * @memberof BackupsController
     */
    static async create(req, res) {
        try {
            const input = req.body;
            const backup = await BackupsModel.create({ input });
            success(req, res, 201, "Created backup");
        } catch (err) {
            error(req, res, 500, "Error creating backup");
        }
    }
}
