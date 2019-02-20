import java.io.*;
import java.util.*;
public class StrToArrayList {
    public static ArrayList<String> toArrayList(String inFile) {
        Scanner original = new Scanner(inFile);
        ArrayList<String> arrayList = new ArrayList<String>();
        do{
            arrayList.add(original.next());
        } while(original.hasNext());
        return arrayList;
    } 
} 