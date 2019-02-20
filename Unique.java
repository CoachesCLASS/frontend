// Author: Katie Carr
// Assignment: CSE5319 Homework#1
import java.util.ArrayList; 
import java.util.Collections; 
import java.util.HashSet; 
import java.util.Scanner; 
public class unique {
    public static void main(String[] args) {
        System.out.println("Enter filepath:"); 
        Scanner s = new Scanner(new File(System.in)); 
        String temp = s.next(); 
        URLGetter grab = new FileGetter(); 
        strToArrayList convert = new StrToArrayList(); 
        String output = grab.getFileContents(temp); 
        System.out.println("Orignal file contents: \n" + output); 
        String noSpecialChars = output.replaceAll("[-+.^:,!]",""); 
        noSpecialChars = noSpecialChars.toLowerCase(); 
        ArrayList<String> aList = strToArrayList.convertToArrayList(noSpecialChars); 
        sort(aList); 
        ArrayList<String> unique = getUniqueWords(aList); 
        for (String element : unique) { 
            System.out.println(element); 
        } 
    }
    public static ArrayList<String> sort(ArrayList<String> unsorted) { 
        Collections.sort(unsorted, String.CASE_INSENSITIVE_ORDER); 
        return unsorted; 
    } 
    public static ArrayList<String> getUniqueWords(ArrayList<String> aList) { 
        ArrayList<String> unique = removeDup(aList); 
        return unique; 
    } 
    public static ArrayList<String> removeDup(ArrayList<String> list) { 
        ArrayList<String> result = new ArrayList<>(); 
        HashSet<String> set = new HashSet<>();
        for (String item : list) { 
            if (!set.contains(item)) { 
                result.add(item); 
                set.add(item); 
            } 
        } 
        return result; 
    } 
}