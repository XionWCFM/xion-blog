import { addDoc, collection } from 'firebase/firestore';
import { firestore } from './firebase';

export class LoggerDatabase {
  static async createLog(body: any) {
    const logRef = collection(firestore, 'log');
    const newDoc = await addDoc(logRef, body);
    return newDoc.id;
  }
}
