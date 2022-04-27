// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells
//  and carries the "instructions" for the development and functioning 
//  of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other,
//  as "C" and "G". You function receives one side of the DNA (string, 
//     except for Haskell); you need to return the other complementary side.
//      DNA strand is never empty or there is no DNA at all (again, except 
//         for Haskell).
function DNAStrand(dna){
   let key = {
       'A' : 'T',
       'T' : 'A',
       'G' : 'C',
       'C' : 'G'
   }
   let comp = ''
    for(let i=0;i<dna.length;i++){
        comp += key[dna[i]]
    }
    console.log(comp)
  
  }

  DNAStrand("ATTGC")